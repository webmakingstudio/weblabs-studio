# Niche Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create two niche-specific landing pages (dental clinics + aesthetic clinics) that reuse the existing WebMakingStudios design system, JS, and form handling.

**Architecture:** Two standalone HTML files at project root. They reuse `styles.css`, `i18n.js`, and `script.js` as-is. Niche-specific content is hard-coded in Spanish. Shared elements (header nav, form, footer) use existing `data-i18n` keys so translations and theme toggle work identically.

**Tech Stack:** Vanilla HTML/CSS/JS, Vercel hosting, Resend API (form)

---

## File Structure

| File | Action | Purpose |
|---|---|---|
| `landing-pages-clinicas-dentales.html` | Create | Niche page for dental clinics |
| `landing-pages-clinicas-estetica.html` | Create | Niche page for aesthetic clinics |
| `styles.css` | Reuse (no changes) | Existing design system |
| `i18n.js` | Reuse (no changes) | Shared i18n engine + theme toggle |
| `script.js` | Reuse (no changes) | Form handling, scroll reveal |

---

### Task 1: Create dental clinics landing page

**Files:**
- Create: `landing-pages-clinicas-dentales.html`

- [ ] **Step 1: Write the full HTML file**

Create the page with these sections following the same shell structure as `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script>
      (function(){
        var t = localStorage.getItem('wms-theme');
        if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t);
      })();
    </script>
    <title>Landing Pages para Clínicas Dentales | WebMakingStudios</title>
    <meta name="description" content="Landing pages para clínicas dentales que convierten visitas en pacientes. Diseño web especializado en Barcelona para dentistas. Pide presupuesto." />
    <link rel="preload" href="assets/fonts/manrope.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="assets/fonts/instrument-serif-regular.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="assets/brand/webmakingstudios-mark.svg" as="image" />
    <link rel="icon" href="assets/brand/webmakingstudios-mark.svg" type="image/svg+xml" />
    <meta property="og:title" content="Landing Pages para Clínicas Dentales | WebMakingStudios" />
    <meta property="og:description" content="Landing pages que convierten visitas en pacientes. Especialistas en diseño web para clínicas dentales en Barcelona." />
    <meta property="og:url" content="https://webmakingstudios.com/landing-pages-clinicas-dentales.html" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://webmakingstudios.com/assets/brand/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Landing Pages para Clínicas Dentales | WebMakingStudios" />
    <meta name="twitter:description" content="Landing pages que convierten visitas en pacientes. Diseño web especializado en Barcelona para dentistas." />
    <meta name="twitter:image" content="https://webmakingstudios.com/assets/brand/og-image.png" />
    <link rel="canonical" href="https://webmakingstudios.com/landing-pages-clinicas-dentales.html" />
    <link rel="alternate" hreflang="es" href="https://webmakingstudios.com/landing-pages-clinicas-dentales.html" />
    <link rel="alternate" hreflang="x-default" href="https://webmakingstudios.com/landing-pages-clinicas-dentales.html" />
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "WebMakingStudios",
      "url": "https://webmakingstudios.com/landing-pages-clinicas-dentales.html",
      "logo": "https://webmakingstudios.com/assets/brand/webmakingstudios-mark.svg",
      "image": "https://webmakingstudios.com/assets/brand/og-image.png",
      "email": "webmakingstudios@gmail.com",
      "telephone": "+34665603259",
      "description": "Landing pages especializadas para clínicas dentales. Diseño web profesional que convierte visitas en pacientes.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Carrer de Can Rovira, 104",
        "addressLocality": "Barcelona",
        "addressRegion": "Barcelona",
        "postalCode": "08186",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.6478,
        "longitude": 2.1714
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 41.6478, "longitude": 2.1714 },
        "geoRadius": "30000"
      },
      "priceRange": "€€",
      "sameAs": []
    }
    </script>
    <link rel="stylesheet" href="styles.css" />
    <script>
      if (window.location.hostname !== 'localhost' && !window.location.hostname.startsWith('127.0.0.1')) {
        document.write('<script defer src="https://cdn.vercel-insights.com/v1/script.js"><\/script>');
      }
    </script>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Saltar al contenido</a>
    <div class="page-shell">
      <header class="site-header">
        <a class="brand" href="/" aria-label="Ir al inicio">
          <img class="brand-mark" src="assets/brand/webmakingstudios-mark.svg" alt="" width="52" height="52" />
          <span class="brand-text" aria-label="WebMakingStudios">
            <span class="brand-text-strong">WebMaking</span>
            <span class="brand-text-script">Studios</span>
          </span>
        </a>
        <nav class="site-nav" aria-label="Principal">
          <a href="/#servicios">Servicios</a>
          <a href="/#proceso">Proceso</a>
          <a href="/#recursos">Recursos</a>
          <a href="/#contacto">Contacto</a>
        </nav>
        <div class="header-actions">
          <button class="theme-toggle" type="button" id="theme-toggle" aria-label="Cambiar tema claro/oscuro">
            <span class="theme-icon-light" aria-hidden="true">☀️</span>
            <span class="theme-icon-dark" aria-hidden="true">🌙</span>
          </button>
          <a class="button button-ghost desktop-cta" href="#contacto">Pedir presupuesto</a>
        </div>
      </header>

      <main id="main-content">
        <!-- HERO -->
        <section class="hero section">
          <div class="hero-copy reveal">
            <p class="eyebrow">Landing pages para clínicas dentales</p>
            <h1>Convierte cada click en <span>un paciente en tu consulta.</span></h1>
            <p class="hero-text">
              Diseñamos landing pages especializadas para clínicas dentales: páginas rápidas, 
              enfocadas en tratamientos específicos y preparadas para tus campañas de Google Ads 
              o Instagram.
            </p>
            <div class="hero-actions">
              <a class="button" href="#contacto">Solicitar presupuesto</a>
              <a class="button button-ghost" href="#problema">Ver cómo ayuda</a>
            </div>
            <div class="hero-points">
              <span>Especializado en dental</span>
              <span>Entrega en 1 semana</span>
              <span>Orientado a conversión</span>
            </div>
          </div>
          <div class="hero-card reveal">
            <div class="preview-window">
              <div class="preview-topbar"><span></span><span></span><span></span></div>
              <div class="preview-body">
                <div class="preview-badge">Landing por tratamiento + formulario de reserva</div>
                <h2>Una página para cada tratamiento, diseñada para que el paciente dé el paso.</h2>
                <p>
                  Desde implantes hasta ortodoncia invisible: cada landing explica el tratamiento,
                  muestra resultados y lleva al paciente directo a la consulta.
                </p>
                <div class="preview-metrics">
                  <div><strong>+30%</strong><span>conversión media</span></div>
                  <div><strong>1 semana</strong><span>de entrega</span></div>
                  <div><strong>100%</strong><span>adaptada a móvil</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- PROBLEMA -->
        <section class="section intro-band reveal" id="problema">
          <p>
            La mayoría de clínicas dentales pierden pacientes porque su web no está pensada 
            para convertir — está pensada para informar. Nosotros cambiamos eso.
          </p>
        </section>

        <!-- 3 PROBLEMAS -->
        <section class="section">
          <div class="section-heading reveal">
            <p class="eyebrow">Problemas comunes</p>
            <h2>¿Te suena algo de esto?</h2>
          </div>
          <div class="cards-grid">
            <article class="service-card reveal">
              <p class="card-label">Problema 1</p>
              <h3>Inviertes en anuncios pero no convierten</h3>
              <p>
                Pones dinero en Google Ads o Instagram para promocionar implantes u ortodoncia,
                pero el paciente llega a una web genérica donde no encuentra lo que busca y se va.
              </p>
            </article>
            <article class="service-card reveal">
              <p class="card-label">Problema 2</p>
              <h3>Tu web no diferencia tratamientos</h3>
              <p>
                Tienes una sola página corporativa que habla de todo a la vez. Un paciente que 
                busca blanqueamiento ve lo mismo que uno que busca ortodoncia invisible. 
                No hay mensaje específico.
              </p>
            </article>
            <article class="service-card reveal">
              <p class="card-label">Problema 3</p>
              <h3>El paciente no encuentra cómo reservar</h3>
              <p>
                Tu web tiene el teléfono escondido, el formulario es largo y no hay WhatsApp visible.
                Cada segundo que el paciente duda, es un paciente que pierdes.
              </p>
            </article>
          </div>
        </section>

        <!-- SOLUCIÓN -->
        <section class="section">
          <div class="section-heading reveal">
            <p class="eyebrow">La solución</p>
            <h2>Una landing por tratamiento. Simple.</h2>
          </div>
          <div class="cards-grid">
            <article class="service-card reveal">
              <p class="card-label">Landing Express — 490€</p>
              <h3>Para un tratamiento estrella</h3>
              <p>
                Una landing centrada en tu tratamiento principal (implantes, ortodoncia, blanqueamiento). 
                Diseño responsive, formulario + WhatsApp directo, SEO básico y RGPD sanitario. 
                Lista en 5-7 días.
              </p>
            </article>
            <article class="service-card reveal">
              <p class="card-label">Landing Pro — 950€</p>
              <h3>Tratamiento con variantes</h3>
              <p>
                Landing con secciones ampliadas: precios, FAQ, galería de resultados, integración 
                con tu CRM. Instalación de Pixel de Meta y Tag de Google Ads para que midas 
                el retorno exacto. Entrega en 10-14 días.
              </p>
            </article>
            <article class="service-card reveal">
              <p class="card-label">Funnel Completo — 1.900€</p>
              <h3>3 landings + dashboard</h3>
              <p>
                Tres páginas: tratamiento estrella + tratamiento secundario + página de reserva. 
                Copywriting persuasivo, tracking de conversiones y 1 mes de mantenimiento 
                incluido. Entrega en 3-4 semanas.
              </p>
            </article>
          </div>
        </section>

        <!-- QUÉ INCLUYE -->
        <section class="section split-section">
          <div class="split-copy reveal">
            <p class="eyebrow">Qué incluye la entrega</p>
            <h2>Todo lo que tu clínica necesita para convertir pacientes online.</h2>
          </div>
          <div class="feature-list reveal">
            <div class="feature-item">
              <span>01</span>
              <div>
                <h3>Diseño enfocado en tu tratamiento</h3>
                <p>
                  Estructura visual pensada para guiar al paciente desde el interés hasta la reserva,
                  con jerarquía clara y copy persuasivo adaptado al sector dental.
                </p>
              </div>
            </div>
            <div class="feature-item">
              <span>02</span>
              <div>
                <h3>Formulario, WhatsApp y botón de llamada</h3>
                <p>
                  El paciente puede contactar por el canal que prefiera sin fricción. Formulario 
                  corto, botón de WhatsApp directo y click-to-call en móvil.
                </p>
              </div>
            </div>
            <div class="feature-item">
              <span>03</span>
              <div>
                <h3>SEO local y cumplimiento RGPD sanitario</h3>
                <p>
                  Configuración base para que te encuentren en Google cuando busquen 
                  "dentista en [tu zona]" o "implantes dentales Barcelona". Todo legalmente 
                  correcto en protección de datos sanitarios.
                </p>
              </div>
            </div>
            <div class="feature-item">
              <span>04</span>
              <div>
                <h3>Lista para tus campañas de anuncios</h3>
                <p>
                  Instalación de píxeles de seguimiento (Meta, Google Ads) para que puedas 
                  medir exactamente cuántos pacientes te trae cada euro invertido en publicidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- POR QUÉ YO -->
        <section class="section confidence-section">
          <div class="confidence-copy reveal">
            <p class="eyebrow">Por qué yo</p>
            <h2>Un especialista junior con precios de lanzamiento y entrega rápida.</h2>
          </div>
          <div class="confidence-grid">
            <article class="confidence-card reveal">
              <h3>Especializado en el sector</h3>
              <p>
                No soy una agencia genérica. Conozco el sector dental, sé qué buscan los pacientes 
                y cómo estructurar una landing que genere reservas.
              </p>
            </article>
            <article class="confidence-card reveal">
              <h3>Precios de lanzamiento</h3>
              <p>
                Estoy construyendo mi portfolio en el sector médico. Tengo tarifas reducidas 
                para mis primeros clientes — la calidad es profesional, el precio es de entrada.
              </p>
            </article>
            <article class="confidence-card reveal">
              <h3>Rápido y cercano</h3>
              <p>
                Trabajo solo, sin capas de agencia. Hablamos directamente, decido rápido, 
                entrego rápido. Y si algo no te cuadra, lo ajusto.
              </p>
            </article>
          </div>
        </section>

        <!-- CONTACTO -->
        <section class="section contact-section" id="contacto">
          <div class="contact-copy reveal">
            <p class="eyebrow">Siguiente paso</p>
            <h2>Cuéntame qué tratamientos quieres potenciar y te preparo una propuesta.</h2>
            <p>
              Si tienes una clínica dental en Barcelona o alrededores y quieres una landing 
              que de verdad convierta visitas en pacientes, escríbeme y lo hablamos sin compromiso.
            </p>
            <div class="contact-shortcuts">
              <a class="button" href="#formulario">Abrir formulario</a>
              <a class="button button-ghost" id="hero-whatsapp-link" href="https://wa.me/34665603259?text=Hola%20WebMakingStudios%2C%20quiero%20informaci%C3%B3n%20sobre%20landings%20para%20mi%20cl%C3%ADnica%20dental." target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
            </div>
            <div class="contact-meta">
              <div><span>Email</span><a href="mailto:webmakingstudios@gmail.com">webmakingstudios@gmail.com</a></div>
              <div><span>WhatsApp</span><a href="https://wa.me/34665603259/" target="_blank" rel="noreferrer">+34 665 603 259</a></div>
            </div>
          </div>

          <div class="contact-form-wrap reveal" id="formulario">
            <form class="contact-form" id="lead-form">
              <div class="form-intro">
                <p class="card-label">Formulario rápido</p>
                <h3>Pide tu presupuesto</h3>
                <p>Rellena esto en un minuto y te abro el canal de contacto por email o WhatsApp.</p>
              </div>
              <label><span>Nombre</span><input type="text" name="nombre" placeholder="Tu nombre" required /></label>
              <label><span>Email</span><input type="email" name="email" placeholder="tuemail@ejemplo.com" autocomplete="email" required /></label>
              <label><span>Clínica</span><input type="text" name="negocio" placeholder="Nombre de tu clínica" required /></label>
              <label><span>Qué necesitas</span>
                <select name="servicio" required>
                  <option value="">Selecciona una opción</option>
                  <option>Landing Express (490€)</option>
                  <option>Landing Pro (950€)</option>
                  <option>Funnel Completo (1.900€)</option>
                  <option>No lo tengo claro aún</option>
                </select>
              </label>
              <label><span>Cuéntame un poco más</span>
                <textarea name="mensaje" rows="5" placeholder="Qué tratamientos ofreces, qué objetivo tienes y para cuándo lo necesitas" required></textarea>
              </label>
              <div class="form-trap" aria-hidden="true"><label>Sitio web<input type="text" name="website" tabindex="-1" autocomplete="off" /></label></div>
              <label class="consent-row">
                <input type="checkbox" name="privacidad" required />
                <span>He leído la <a href="politica-de-privacidad.html">política de privacidad</a> y acepto el tratamiento de mis datos para recibir respuesta a esta solicitud.</span>
              </label>
              <div class="form-actions">
                <button class="button" type="submit" id="submit-request">Enviar solicitud</button>
                <button class="button button-ghost" type="button" id="send-whatsapp">Enviar por WhatsApp</button>
              </div>
              <p class="form-status" id="form-status" aria-live="polite"></p>
              <p class="form-note">Si lo prefieres, puedes escribirme directamente por WhatsApp. También puedes consultar el <a href="aviso-legal.html">aviso legal</a>.</p>
            </form>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="footer-copy">
          <a class="brand footer-brand" href="/" aria-label="Ir al inicio">
            <img class="brand-mark" src="assets/brand/webmakingstudios-mark.svg" alt="" width="48" height="48" loading="lazy" decoding="async" />
            <span class="brand-text" aria-label="WebMakingStudios">
              <span class="brand-text-strong">WebMaking</span>
              <span class="brand-text-script">Studios</span>
            </span>
          </a>
          <p class="footer-note">Landing pages especializadas para clínicas dentales en Barcelona.</p>
        </div>
        <div class="footer-links">
          <a href="aviso-legal.html">Aviso legal</a>
          <a href="politica-de-privacidad.html">Política de privacidad</a>
        </div>
      </footer>
    </div>

    <script src="i18n.js"></script>
    <script src="script.js"></script>
    <script>
      window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
    </script>
    <script>
      if (window.location.hostname !== 'localhost' && !window.location.hostname.startsWith('127.0.0.1')) {
        var s = document.createElement('script');
        s.defer = true;
        s.src = '/_vercel/speed-insights/script.js';
        document.body.appendChild(s);
      }
    </script>
  </body>
</html>
```

### Task 2: Create aesthetic clinics landing page

**Files:**
- Create: `landing-pages-clinicas-estetica.html`

- [ ] **Step 1: Write the full HTML file**

Same structure as dental page with these swapped elements:
- Title: "Landing Pages para Clínicas de Medicina Estética | WebMakingStudios"
- Meta description focused on "medicina estética" instead of "dental"
- Hero headline: "Convierte seguidores de Instagram en <span>pacientes en tu clínica.</span>"
- Hero description about Instagram traffic, ácido hialurónico, láser, depilación
- Problems: (1) Instagram no convierte sin landing, (2) web genérica no diferencia tratamientos estéticos, (3) paciente no reserva por falta de confianza visual
- Packages same pricing, with estética-specific descriptions
- Features include "Antes/después con permiso legal" and "Integración con Instagram"
- "Por qué yo" section emphasizes knowledge of medical-esthetic sector
- Form select options adapted
- Contact copy mentions "medicina estética" instead of "dental"
- Footer: "Landing pages especializadas para clínicas de medicina estética en Barcelona."
- Structured data `description` updated for estética
- Schema.org markup adapted

### Task 3: Verify both pages

**Files:** None (manual verification)

- [ ] **Step 1: Validate HTML syntax**

```bash
# Check both files parse correctly (basic check)
grep -c "</html>" /home/alexnavau/Documentos/weblabs-studio/landing-pages-clinicas-dentales.html
grep -c "</html>" /home/alexnavau/Documentos/weblabs-studio/landing-pages-clinicas-estetica.html
# Both should output: 1
```

- [ ] **Step 2: Verify CSS and JS paths resolve**

All `href` and `src` attributes use relative paths:
- `styles.css` ✓ (same directory)
- `i18n.js` ✓ (same directory)
- `script.js` ✓ (same directory)
- `assets/brand/webmakingstudios-mark.svg` ✓
- `assets/fonts/manrope.woff2` ✓
- `assets/fonts/instrument-serif-regular.woff2` ✓
- `aviso-legal.html` ✓
- `politica-de-privacidad.html` ✓

- [ ] **Step 3: Check for hard-coded content issues**

Verify there are NO `data-i18n` attributes on niche-specific text (prevents blank text from missing translation keys). Header/footer links point to `/#` anchors correctly.

- [ ] **Step 4: Run a local server and load each page**

```bash
cd /home/alexnavau/Documentos/weblabs-studio && npx vercel dev
# Open http://localhost:3000/landing-pages-clinicas-dentales.html
# Open http://localhost:3000/landing-pages-clinicas-estetica.html
# Verify: theme toggle works, form submits, scroll-reveal animates, mobile responsive
```
