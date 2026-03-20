const MAX_FIELD_LENGTH = 2000;

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

function buildEmailMarkup({ nombre, email, negocio, servicio, mensaje }) {
  const items = [
    ["Nombre", nombre],
    ["Email", email],
    ["Negocio o marca", negocio],
    ["Servicio", servicio],
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

function buildPlainText({ nombre, email, negocio, servicio, mensaje }) {
  return [
    "Nueva solicitud desde WebMakingStudios",
    "",
    `Nombre: ${nombre}`,
    `Email: ${email}`,
    `Negocio o marca: ${negocio}`,
    `Servicio: ${servicio}`,
    "",
    "Detalles del proyecto:",
    mensaje,
  ].join("\n");
}

export async function POST(request) {
  try {
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

    if (website) {
      return jsonResponse({ ok: true }, 200);
    }

    if (!nombre || !email || !negocio || !servicio || !mensaje) {
      return jsonResponse({ error: "Completa todos los campos obligatorios." }, 400);
    }

    if (
      !email.includes("@") ||
      [nombre, email, negocio, servicio, mensaje].some(
        (field) => field.length > MAX_FIELD_LENGTH
      )
    ) {
      return jsonResponse({ error: "Revisa los datos del formulario." }, 400);
    }

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
        html: buildEmailMarkup({ nombre, email, negocio, servicio, mensaje }),
        text: buildPlainText({ nombre, email, negocio, servicio, mensaje }),
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
