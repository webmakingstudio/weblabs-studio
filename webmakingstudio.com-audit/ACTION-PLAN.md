# 🎯 Action Plan — WebMakingStudios SEO

**Date:** 2026-07-21 | **Health Score:** 29/100 → Target: 75+/100

---

## Phase 1: Critical Fixes (Week 1) 🔴

Bloquean indexación, causan penalizaciones o exponen datos sensibles.

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | **Corregir dominio en robots.txt** — Cambiar `webmakingstudios.com` → `webmakingstudio.com` en la URL del sitemap y en el comentario | 5 min | 🔴 Bloquea discoverability |
| 2 | **Añadir `noindex` a `auditoria.html`** — `<meta name="robots" content="noindex, nofollow">` en el `<head>` | 2 min | 🔴 Expone datos sensibles |
| 3 | **Completar Aviso Legal** — Reemplazar TODOS los textos de plantilla/placeholder con contenido legal real | 2 h | 🔴 Riesgo legal + confianza |
| 4 | **Completar Política de Privacidad** — Ídem, eliminar "pendiente de completar", "Indicar que…" | 2 h | 🔴 Riesgo legal + RGPD |
| 5 | **Añadir meta descriptions** — Una única de 150-160 chars para cada página (Home, Aviso Legal, Privacidad, Auditoría) | 30 min | 🔴 CTR en SERPs |
| 6 | **Implementar schema Organization** — JSON-LD con name, url, email, telephone, address, sameAs en todas las páginas | 1 h | 🔴 Sin entidad para Google |
| 7 | **Cambiar redirect 307 → 301** — `www → non-www` debe ser permanente | 5 min | 🟠 Señal de canonicalización |
| 8 | **Corregir error de encoding** — `espa��ola` → `española` en aviso-legal.html | 1 min | 🔴 Visible para usuarios |

---

## Phase 2: High-Impact Improvements (Weeks 2-3) 🟠

Afectan significativamente rankings y confianza.

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 9 | **Crear página "Sobre mí / About"** — Foto, nombre (Alex Gutierrez Navau), experiencia, skills, linkedin. Con schema `Person`. | 3 h | 🟠 E-E-A-T |
| 10 | **Añadir testimonios reales** — 3-5 clientes con nombre, foto (o inicial), proyecto, resultado. Con schema `Review`. | 4 h | 🟠 Prueba social |
| 11 | **Añadir Open Graph + Twitter Cards** — `og:title`, `og:description`, `og:image`, `og:type`, `twitter:card` en todas las páginas | 1 h | 🟠 Social sharing |
| 12 | **Añadir hreflang en HTML `<head>`** — Tags de alternate para ES, EN, x-default en cada página, además de los del sitemap | 1 h | 🟠 Bilingüe SEO |
| 13 | **Crear páginas de blog individuales** — `/blog/como-elegir-landing-page/`, `/blog/5-claves-diseno-web-conversion/`, `/blog/diseno-web-barcelona-autonomos/` | 6 h | 🟠 Site depth + contenido |
| 14 | **Añadir security headers** — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy en Vercel | 1 h | 🟠 Seguridad + trust |
| 15 | **Implementar schema Service** — Para cada uno de los 3 servicios (Landing, Rediseño, Mantenimiento) | 1 h | 🟠 Rich results |
| 16 | **Arreglar traducción inglés o eliminar switcher** — Si `?lang=en` no está traducido, o se traduce o se quita el toggle | 4 h (trad) / 5 min (quitar) | 🟠 Experiencia de usuario |
| 17 | **Configurar email de dominio** — `alex@webmakingstudio.com` en vez de Gmail | 1 h | 🟠 Profesionalismo |
| 18 | **Crear Google Business Profile** — Perfil en Google Maps para "WebMakingStudios — Landing pages Barcelona" | 1 h | 🟠 SEO Local |
| 19 | **Restringir CORS** — Cambiar `*` por origen específico | 10 min | 🟠 Seguridad |

---

## Phase 3: Content & Authority (Month 2) 🟡

Optimizaciones y construcción de autoridad.

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 20 | **Crear `llms.txt`** — Archivo para crawlers de IA con resumen del sitio y páginas clave | 30 min | 🟡 AI discoverability |
| 21 | **Crear página `/recursos/`** independiente — Eliminar URL con fragmento del sitemap | 2 h | 🟡 Indexabilidad |
| 22 | **Añadir Schema FAQ** — Si se crea sección de preguntas frecuentes en la home o página propia | 2 h | 🟡 Rich results |
| 23 | **Crear portfolio visual** — 3-5 proyectos con screenshots, descripción, resultados, tecnologías usadas | 6 h | 🟡 E-E-A-T + conversión |
| 24 | **Añadir canonical tags** — Self-referencing canonicals en aviso-legal.html, politica-de-privacidad.html | 15 min | 🟡 Duplicate content |
| 25 | **Corregir viewport meta en auditoria.html** — `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | 1 min | 🟡 Mobile usability |
| 26 | **Corregir comentario en robots.txt** — Las páginas legales NO tienen noindex (o añadirlo) | 5 min | 🟡 Precisión |
| 27 | **Anchor text descriptivo** — Cambiar "Leer más" por títulos de artículos | 15 min | 🟡 Internal linking |
| 28 | **Listar en directorios** — Clutch, Sortlist, The Manifest, Behance, Dribbble | 4 h | 🟡 Backlinks |

---

## Phase 4: Monitoring & Iteration (Ongoing) 🟢

| # | Action | Frequency |
|---|--------|-----------|
| 29 | **Google Search Console** — Configurar, verificar propiedad, monitorizar clicks, impresiones, posición media | Setup once, weekly review |
| 30 | **Google Analytics / GA4** — Configurar para medir tráfico orgánico, conversiones del formulario | Setup once, monthly review |
| 31 | **Lighthouse audit** — Ejecutar cada mes para monitorizar Core Web Vitals | Monthly |
| 32 | **Actualizar sitemap `lastmod`** — Cuando se modifiquen páginas sustancialmente | Per change |
| 33 | **Crear contenido nuevo** — 1-2 blog posts/mes sobre landing pages, diseño web, conversión, Barcelona | Monthly |
| 34 | **Link building local** — 2-3 backlinks/mes de calidad (guest posts, directorios, colaboraciones) | Monthly |

---

## 📈 Estimated Impact Timeline

| Timeframe | Health Score Target | Key Milestones |
|-----------|---------------------|----------------|
| Week 1 | 29 → 50 | Critical fixes done. Schema, meta descriptions, robots.txt fixed. Legal pages complete. |
| Weeks 2-3 | 50 → 65 | E-E-A-T signals added. Blog pages live. OG tags, hreflang, security headers. GBP created. |
| Month 2 | 65 → 75 | Content depth. llms.txt. Portfolio. Directory listings. |
| Ongoing | 75+ → 85+ | Content marketing. Link building. CWV optimization. |

---

**Generated:** 2026-07-21 | **Tool:** claude-seo v2.2.4
