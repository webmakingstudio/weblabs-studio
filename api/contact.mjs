const MAX_FIELD_LENGTH = 2000;

// ── Rate limiting ──────────────────────────────────────────────────
// Simple in-memory sliding-window rate limiter.  Tied to the function
// instance so it resets on cold starts, but it prevents bursts from a
// single IP within a given window.
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // max requests per IP per window
const rateLimitStore = new Map();

function getClientIP(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // The leftmost IP is the original client (Vercel proxies append).
    return forwarded.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  return realIP || "unknown";
}

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  let timestamps = rateLimitStore.get(ip);
  if (!timestamps) {
    timestamps = [];
    rateLimitStore.set(ip, timestamps);
  }

  // Purge expired entries for this IP.
  const recent = timestamps.filter((ts) => ts > windowStart);
  rateLimitStore.set(ip, recent);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  recent.push(now);
  return true;
}

// Periodic cleanup to prevent memory leaks (runs max once per 10 min).
let lastCleanup = 0;
function cleanupRateLimitStore() {
  const now = Date.now();
  if (now - lastCleanup < 10 * 60 * 1000) return;
  lastCleanup = now;

  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  for (const [ip, timestamps] of rateLimitStore.entries()) {
    const recent = timestamps.filter((ts) => ts > cutoff);
    if (recent.length === 0) {
      rateLimitStore.delete(ip);
    } else {
      rateLimitStore.set(ip, recent);
    }
  }
}

// ── Validation ─────────────────────────────────────────────────────

/**
 * Robust email validation:
 * - Must match a standard email pattern.
 * - Max 254 chars (RFC 5321 limit).
 * - Disallow common disposable / role-based patterns we know are risky.
 */
const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",
  "guerrillamail.com",
  "10minutemail.com",
  "tempmail.com",
  "yopmail.com",
  "throwaway.email",
  "sharklasers.com",
  "trashmail.com",
  "temp-mail.org",
  "fakeinbox.com",
]);

function validateEmail(email) {
  if (!email || typeof email !== "string") return false;
  if (email.length > 254) return false;

  const normalized = email.trim().toLowerCase();

  if (!EMAIL_RE.test(normalized)) return false;

  const domain = normalized.split("@")[1];
  if (!domain) return false;
  if (DISPOSABLE_DOMAINS.has(domain)) return false;

  return true;
}

// ── Helpers ─────────────────────────────────────────────────────────

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function normalizeField(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailMarkup({
  nombre,
  email,
  negocio,
  servicio,
  mensaje,
  language,
}) {
  const items = [
    ["Nombre", nombre],
    ["Email", email],
    ["Negocio o marca", negocio],
    ["Servicio", servicio],
    ["Idioma del formulario", language === "en" ? "English" : "Español"],
  ];

  const listMarkup = items
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 0;font-weight:700;color:#21180f;width:180px;">${escapeHtml(label)}</td>
          <td style="padding:8px 0;color:#695a49;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#fffaf5;color:#21180f;padding:24px;">
      <h1 style="margin:0 0 18px;font-size:28px;">Nueva solicitud desde WebMakingStudios</h1>
      <p style="margin:0 0 22px;color:#695a49;line-height:1.7;">
        Has recibido una nueva petición de presupuesto desde el formulario de la landing.
      </p>
      <table style="width:100%;border-collapse:collapse;">
        ${listMarkup}
      </table>
      <div style="margin-top:24px;padding:18px;border-radius:16px;background:#f4efe8;">
        <p style="margin:0 0 10px;font-weight:700;">Detalles del proyecto</p>
        <p style="margin:0;white-space:pre-wrap;color:#695a49;line-height:1.7;">${escapeHtml(
          mensaje
        )}</p>
      </div>
    </div>
  `;
}

function buildPlainText({
  nombre,
  email,
  negocio,
  servicio,
  mensaje,
  language,
}) {
  return [
    "Nueva solicitud desde WebMakingStudios",
    "",
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    `Negocio o marca: ${negocio}`,
    `Servicio: ${servicio}`,
    `Idioma del formulario: ${language === "en" ? "English" : "Español"}`,
    "",
    "Detalles del proyecto:",
    mensaje,
  ].join("\n");
}

// ── Handler ─────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    // ── Rate limit check ──────────────────────────────────────────
    const clientIP = getClientIP(request);
    cleanupRateLimitStore();

    if (!checkRateLimit(clientIP)) {
      return jsonResponse(
        {
          error:
            "Has enviado demasiadas solicitudes. Espera unos minutos y vuelve a intentarlo.",
        },
        429
      );
    }

    // ── Config ─────────────────────────────────────────────────────
    const resendApiKey = process.env.RESEND_API_KEY;
    const destinationEmail =
      process.env.CONTACT_TO_EMAIL || "webmakingstudios@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "WebMakingStudios <onboarding@resend.dev>";

    if (!resendApiKey) {
      return jsonResponse(
        {
          error:
            "Falta configurar RESEND_API_KEY en Vercel para activar el envío real del formulario.",
        },
        500
      );
    }

    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return jsonResponse({ error: "Formato de envío no válido." }, 415);
    }

    const payload = await request.json();
    const nombre = normalizeField(payload.nombre);
    const email = normalizeField(payload.email);
    const negocio = normalizeField(payload.negocio);
    const servicio = normalizeField(payload.servicio);
    const mensaje = normalizeField(payload.mensaje);
    const website = normalizeField(payload.website);
    const language = normalizeField(payload.language) === "en" ? "en" : "es";

    // ── Honeypot ───────────────────────────────────────────────────
    if (website) {
      // Silent rejection for bots — don't leak whether it succeeded.
      return jsonResponse({ ok: true }, 200);
    }

    // ── Required fields ────────────────────────────────────────────
    if (!nombre || !email || !negocio || !servicio || !mensaje) {
      return jsonResponse({ error: "Completa todos los campos obligatorios." }, 400);
    }

    // ── Email validation ───────────────────────────────────────────
    if (!validateEmail(email)) {
      return jsonResponse({ error: "El email no tiene un formato válido." }, 400);
    }

    // ── Field length validation ────────────────────────────────────
    if (
      [nombre, email, negocio, servicio, mensaje].some(
        (field) => field.length > MAX_FIELD_LENGTH
      )
    ) {
      return jsonResponse({ error: "Revisa los datos del formulario." }, 400);
    }

    // ── Send via Resend ────────────────────────────────────────────
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [destinationEmail],
        subject: `Nueva solicitud de ${nombre} desde WebMakingStudios`,
        reply_to: email,
        html: buildEmailMarkup({
          nombre,
          email,
          negocio,
          servicio,
          mensaje,
          language,
        }),
        text: buildPlainText({
          nombre,
          email,
          negocio,
          servicio,
          mensaje,
          language,
        }),
      }),
    });

    if (!resendResponse.ok) {
      const resendError = await resendResponse.json().catch(() => null);

      return jsonResponse(
        {
          error:
            resendError?.message ||
            "El proveedor de email rechazó el envío. Revisa la configuración de Resend.",
        },
        502
      );
    }

    const resendResult = await resendResponse.json().catch(() => null);

    return jsonResponse({
      ok: true,
      id: resendResult?.id || null,
    });
  } catch (error) {
    return jsonResponse(
      {
        error:
          error instanceof Error
            ? error.message
            : "Ha ocurrido un error inesperado al enviar el formulario.",
      },
      500
    );
  }
}
