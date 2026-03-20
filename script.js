// Reemplaza estos datos por los reales antes de publicar la landing.
const contactConfig = {
  email: "webmakingstudios@gmail.com",
  whatsappNumber: "34665603259",
};

const revealElements = document.querySelectorAll(".reveal");
const form = document.querySelector("#lead-form");
const whatsappButton = document.querySelector("#send-whatsapp");
const submitButton = document.querySelector("#submit-request");
const formStatus = document.querySelector("#form-status");
const emailLink = document.querySelector("#contact-email-link");
const whatsappLink = document.querySelector("#contact-whatsapp-link");
const heroWhatsappLink = document.querySelector("#hero-whatsapp-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

if (emailLink) {
  emailLink.href = `mailto:${contactConfig.email}`;
  emailLink.textContent = contactConfig.email;
}

if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${contactConfig.whatsappNumber}`;
  whatsappLink.textContent = `+${contactConfig.whatsappNumber}`;
}

if (heroWhatsappLink) {
  heroWhatsappLink.href = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hola WebMakingStudios, quiero pedir presupuesto para mi landing."
  )}`;
}

function buildMessage(formData) {
  const name = formData.get("nombre");
  const email = formData.get("email");
  const business = formData.get("negocio");
  const service = formData.get("servicio");
  const details = formData.get("mensaje");

  return [
    "Hola WebMakingStudios,",
    "",
    "Quiero pedir presupuesto para mi proyecto web.",
    "",
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Negocio: ${business}`,
    `Servicio: ${service}`,
    "",
    "Detalles:",
    details,
  ].join("\n");
}

function setFormStatus(type, message) {
  if (!formStatus) {
    return;
  }

  formStatus.textContent = message;
  formStatus.dataset.state = type;
}

function setSubmittingState(isSubmitting) {
  if (submitButton) {
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? "Enviando..." : "Enviar solicitud";
  }

  if (whatsappButton) {
    whatsappButton.disabled = isSubmitting;
  }
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    setSubmittingState(true);
    setFormStatus("idle", "");

    const formData = new FormData(form);
    const payload = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      negocio: formData.get("negocio"),
      servicio: formData.get("servicio"),
      mensaje: formData.get("mensaje"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error || "No se pudo enviar el formulario en este momento."
        );
      }

      form.reset();
      setFormStatus(
        "success",
        "Solicitud enviada. Te responderemos lo antes posible por email."
      );
    } catch (error) {
      setFormStatus(
        "error",
        error.message ||
          "No se pudo enviar ahora mismo. Prueba de nuevo o escríbenos por WhatsApp."
      );
    } finally {
      setSubmittingState(false);
    }
  });
}

if (whatsappButton && form) {
  whatsappButton.addEventListener("click", () => {
    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const message = encodeURIComponent(buildMessage(formData));
    const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank", "noreferrer");
  });
}
