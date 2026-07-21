# 🔍 Full SEO Audit Report — WebMakingStudios

**URL:** `https://webmakingstudio.com/`  
**Date:** 2026-07-21  
**Business Type:** Agencia de landing pages (servicio profesional local — Barcelona)  
**Platform:** HTML estático + Vercel  
**Pages Crawled:** 4 (Home, Auditoría, Aviso Legal, Política de Privacidad)

---

## 📊 Executive Summary

| Metric | Score |
|--------|-------|
| **Overall SEO Health Score** | **29/100** 🔴 |
| Technical SEO (22%) | 35/100 |
| Content Quality (23%) | 30/100 |
| On-Page SEO (20%) | 25/100 |
| Schema / Structured Data (10%) | 0/100 |
| Performance / CWV (10%) | 55/100 |
| AI Search Readiness (10%) | 20/100 |
| Images (5%) | 40/100 |

---

## 🚨 Top 5 Critical Issues

1. **🔴 robots.txt apunta al dominio equivocado** — El sitemap en robots.txt referencia `webmakingstudios.com` (plural) en vez de `webmakingstudio.com` (singular). Google NO encontrará tu sitemap.

2. **🔴 CERO schema markup en todo el sitio** — Sin JSON-LD, Microdata ni RDFa. Sin `Organization`, `LocalBusiness`, `Service`, ni `WebSite`. Google no entiende quién eres como entidad.

3. **🔴 Páginas legales con texto de plantilla/placeholder PUBLICADO** — "Plantilla pendiente de completar", "Indicar que aplicas medidas…", "Explicar que la web informa…". Esto es contenido visible para usuarios y Google. Riesgo legal y de confianza.

4. **🔴 `auditoria.html` completamente indexable con datos sensibles** — Expone vulnerabilidades de seguridad, notas de exposición de datos personales, y "API key real fue commiteada". Sin `noindex`, sin bloqueo en robots.txt.

5. **🔴 Sin meta descriptions en ninguna página** — Google genera snippets automáticos. Pierdes control total sobre cómo apareces en las SERPs.

---

## 📋 Technical SEO

**Score: 35/100**

### ✅ What Works
- HTTPS forzado con redirect 307 (www → non-www)
- HSTS presente: `max-age=63072000` (2 años)
- Hosting en Vercel con caché funcionando
- `robots.txt` permite crawling completo (Allow: /)
- Sitemap XML existe y es válido
- `Content-Type: text/html; charset=utf-8` correcto
- ETags y Last-Modified presentes

### 🔴 Critical
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 1 | **Dominio incorrecto en robots.txt** | `Sitemap: https://webmakingstudios.com/sitemap.xml` usa el dominio en PLURAL. El dominio real es `webmakingstudio.com` (singular). | Cambiar a `Sitemap: https://webmakingstudio.com/sitemap.xml` |
| 2 | **auditoria.html indexable** | Contiene datos de seguridad sensibles. Sin `noindex`, sin bloqueo. | Añadir `<meta name="robots" content="noindex, nofollow">` o bloquear en robots.txt |

### 🟠 High
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 3 | **Redirect 307 (temporal) en vez de 301** | `www.webmakingstudio.com` → `webmakingstudio.com` usa HTTP 307. Debería ser 301 (permanente) para SEO. | Configurar redirect 301 en Vercel |
| 4 | **Faltan headers de seguridad** | Sin `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` | Añadir en configuración de Vercel |
| 5 | **CORS wildcard inseguro** | `access-control-allow-origin: *` — demasiado permisivo | Restringir a orígenes específicos |

### 🟡 Medium
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 6 | **URLs con fragmento (#) en sitemap** | `#recursos` no es una URL distinta. Google ignora fragmentos. | Crear página separada `/recursos/` o eliminar del sitemap |
| 7 | **Sitemap muy pequeño (4 URLs)** | Sin blog posts, sin páginas de servicio individuales | Expandir arquitectura de contenido |
| 8 | **Comentario incorrecto en robots.txt** | Dice "Las páginas legales no necesitan indexarse (ya tienen meta noindex)" pero NO tienen meta noindex | Corregir comentario o añadir noindex |

### 🟢 Low
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 9 | **`lastmod` en sitemap sin actualizar** | 2026-07-06 para todas las URLs | Mantener actualizado |

---

## 📝 Content Quality (E-E-A-T)

**Score: 30/100**

### ✅ What Works
- Copy en español bien escrito, orientado a beneficios
- Propuesta de valor clara: "Creamos páginas que convierten visitas en clientes"
- Estructura de headings lógica (H1→H2→H3)
- Proceso de trabajo transparente (3 pasos)
- Servicios claramente definidos (Landing, Rediseño, Mantenimiento)
- Tono profesional y coherente

### 🔴 Critical
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 1 | **Aviso Legal INCOMPLETO** | Texto dice: "Plantilla de aviso legal pendiente de completar antes de publicar", "Explicar que la web informa sobre los servicios de la marca" | Completar YA con datos reales |
| 2 | **Política de Privacidad INCOMPLETA** | "Plantilla de política de privacidad pendiente de completar", "Indicar que aplicas medidas razonables de seguridad" | Completar YA con texto legal real |
| 3 | **Error de encoding** | `espa��ola` en aviso-legal.html — carácter UTF-8 roto | Corregir a "española" |

### 🟠 High
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 4 | **Cero señales de autoría** | Sin nombres, caras, biografías ni credenciales. Sin sección "Sobre nosotros". | Crear página About con Alex Gutierrez Navau, foto, experiencia |
| 5 | **Sin testimonios ni casos de éxito** | Sin prueba social. Sin portfolio. Sin logos de clientes. | Añadir 3-5 testimonios reales con nombres y fotos |
| 6 | **Versión en inglés NO traducida** | `?lang=en` muestra contenido en español. El language switcher es cosmético. | Traducir todo el contenido o eliminar el switcher |
| 7 | **Blog posts sin páginas propias** | "Leer más" no lleva a URLs separadas. 3 artículos listados pero sin páginas de detalle. | Crear páginas de blog individuales (`/blog/como-elegir-landing-page/`) |

### 🟡 Medium
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 8 | **Email de Gmail** | `webmakingstudios@gmail.com` — menos profesional que `alex@webmakingstudio.com` | Configurar email de dominio |
| 9 | **Anchor text genérico** | "Leer más" en todos los recursos. Sin keywords. | Usar títulos de artículos como anchor text |
| 10 | **Sin dirección física/NIF visible** | Datos legales solo en páginas secundarias (y además incompletas) | Añadir NAP en footer |

---

## 🏷️ On-Page SEO

**Score: 25/100**

### ✅ What Works
- Title tags presentes en todas las páginas
- H1 único por página
- Jerarquía de headings correcta
- URLs limpias y descriptivas
- Idioma español bien implementado en contenido

### 🔴 Critical
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 1 | **CERO meta descriptions** | Ninguna página tiene `<meta name="description">`. | Añadir meta description única de 150-160 chars por página |
| 2 | **Arquitectura single-page** | Toda la web es una sola página con anchors (#servicios, #proceso, #contacto). 0 profundidad de sitio. | Crear páginas individuales para Servicios, Proceso, Blog |

### 🟠 High
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 3 | **Sin Open Graph / Twitter Cards** | Compartir en redes muestra snippets sin control. | Añadir `og:title`, `og:description`, `og:image`, `og:type`, `twitter:card` |
| 4 | **Hreflang solo en sitemap, NO en HTML** | Sin `<link rel="alternate" hreflang="...">` en el `<head>`. El sitemap los tiene pero Google prefiere tags HTML. | Añadir hreflang en cada página + header HTTP Link |
| 5 | **Language switcher sin hreflang real** | Los flags 🇪🇸🇺🇸 no tienen implementación funcional de traducción | Implementar traducción real o eliminar el switcher |

### 🟡 Medium
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 6 | **Sin canonical tags en subpáginas** | `aviso-legal.html` y `politica-de-privacidad.html` sin self-referencing canonical | Añadir `<link rel="canonical" href="...">` |
| 7 | **auditoria.html sin viewport meta** | `<meta name="viewport">` ausente — error de usabilidad móvil | Añadir viewport meta tag |
| 8 | **H1 ambiguo en homepage** | "Diseño y desarrollo de landing pages" y "Creamos páginas que convierten visitas en clientes" compiten | Asegurar UN solo H1 |

---

## 🧩 Schema / Structured Data

**Score: 0/100**

### 🔴 Critical
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 1 | **CERO schema en TODO el sitio** | Sin JSON-LD, Microdata, ni RDFa en ninguna página | Implementar schema YA |

### Schema recomendado (por orden de prioridad):

1. **`Organization`** (en todas las páginas)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "WebMakingStudios",
  "url": "https://webmakingstudio.com",
  "email": "webmakingstudios@gmail.com",
  "telephone": "+34665603259",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barcelona",
    "addressCountry": "ES"
  },
  "sameAs": ["https://wa.me/34665603259"]
}
```

2. **`Service`** (para cada servicio: Landing, Rediseño, Mantenimiento)
3. **`WebSite`** + `SearchAction`
4. **`BreadcrumbList`**
5. **`FAQ`** (si se añade sección de preguntas frecuentes)

---

## ⚡ Performance (Core Web Vitals)

**Score: 55/100 (estimado, sin datos de campo)**

### ✅ What Works
- Hosting en Vercel con CDN global
- Caché funcionando (`x-vercel-cache: HIT`)
- HTTPS + HSTS
- Sitio pequeño (HTML estático, ~29KB)

### Observaciones:
- Sin datos de CrUX/Lighthouse disponibles (PageSpeed no se pudo ejecutar en este análisis)
- **Recomendación:** Ejecutar auditoría de Lighthouse manualmente para obtener LCP, TBT, CLS reales
- Sitio ligero (pocas imágenes, HTML estático) → probablemente puntúa bien en performance
- `auditoria.html` sin viewport meta → error de usabilidad móvil

---

## 🖼️ Images

**Score: 40/100**

### Observaciones:
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 1 | **Solo 1 imagen** (logo SVG) | Sin hero image, sin iconos de servicios, sin fotos | Añadir imágenes relevantes con alt text |
| 2 | **Alt text del logo** | `alt="WebMaking Studios"` — adecuado pero podría ser más descriptivo | `alt="Logotipo de WebMaking Studios — Landing pages en Barcelona"` |
| 3 | **Sin imágenes WebP/AVIF** | Si se añaden imágenes, usar formatos modernos | Convertir a WebP/AVIF |

---

## 🤖 AI Search Readiness (GEO)

**Score: 20/100**

### 🔴 Critical
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 1 | **Sin `llms.txt`** | Los crawlers de IA (ChatGPT, Claude, Gemini) no tienen guía de contenido | Crear `/llms.txt` con resumen del sitio |
| 2 | **Sin schema de entidad** | Sin `Organization`/`Person` schema, los LLMs no asocian la marca | Implementar schema (ver sección Schema) |

### 🟠 High
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 3 | **Sin señales de autoridad** | Sin backlinks, sin citas, sin presencia en otros sitios | Estrategia de link building local |
| 4 | **Sin marca personal** | Alex Gutierrez Navau no aparece como entidad. Sin Google Knowledge Graph. | Crear perfil de LinkedIn, Google Business Profile |

### 🟡 Medium
| # | Issue | Detail | Fix |
|---|-------|--------|-----|
| 5 | **Contenido citado** | El contenido responde preguntas claras pero no está estructurado para ser "citable" | Añadir definiciones concisas, estadísticas, datos propios |
| 6 | **Sin presencia en directorios** | No detectado en directorios de agencias/web studios | Listar en Clutch, Sortlist, The Manifest |

---

## 🔗 Backlinks & Authority

**Score: N/A (no data available)**

### Recomendaciones:
- Configurar Google Search Console para ver perfil de enlaces
- Crear perfil en Google Business Profile (Barcelona)
- Listar en directorios de agencias: Clutch, Sortlist, The Manifest, Behance, Dribbble
- Guest posting en blogs de diseño web/marketing digital
- Participación en comunidades locales de Barcelona tech

---

## 📊 Categorization of All Findings

| Severity | Count | Action |
|----------|-------|--------|
| 🔴 Critical | 8 | Fix immediately (this week) |
| 🟠 High | 11 | Fix within 2 weeks |
| 🟡 Medium | 9 | Fix within 1 month |
| 🟢 Low | 2 | Backlog |
| **Total** | **30** | |

---

**Report generated:** 2026-07-21  
**Audit tool:** claude-seo v2.2.4  
**Site:** webmakingstudio.com
