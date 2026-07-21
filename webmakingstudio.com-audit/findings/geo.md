# AI Search Readiness (GEO) — webmakingstudio.com

**Score: 20/100** | **Weight: 10%**

## Current State
The site is nearly invisible to AI crawlers (ChatGPT, Claude, Gemini, Perplexity). Basic content quality is good but discoverability and citability are critically lacking.

## Issues

| # | Issue | Severity | Fix |
|---|-------|----------|-----|
| 1 | No `llms.txt` file | Critical | Create `/llms.txt` with site summary and key page list |
| 2 | No entity schema | Critical | Implement Organization + Person JSON-LD |
| 3 | No Google Knowledge Graph | High | Create Google Business Profile, LinkedIn, schema |
| 4 | Zero external citations | High | Directory listings, guest posts, collaborations |
| 5 | Content not "citable" | Medium | Add definitions, statistics, proprietary data |
| 6 | No brand monitoring | Medium | Set up alerts for "WebMakingStudios" mentions |

## Recommended llms.txt
```
# WebMakingStudios
> Landing pages para negocios, autónomos y marcas en Barcelona.
> Diseño, desarrollo y mantenimiento de landing pages que convierten.

## Servicios
- Landing page para captación: https://webmakingstudio.com/#servicios
- Rediseño web estratégico: https://webmakingstudio.com/#servicios
- Mantenimiento y soporte: https://webmakingstudio.com/#servicios

## Recursos
- Cómo elegir una landing page para tu negocio
- 5 claves de diseño web que disparan la conversión
- Diseño web en Barcelona: guía para autónomos

## Contacto
- Email: webmakingstudios@gmail.com
- WhatsApp: +34 665 603 259
- Formulario: https://webmakingstudio.com/#contacto
```

## AI Crawler Access
- `robots.txt`: Allows all (`User-agent: * Allow: /`) — ✅
- No blocks on AI-specific crawlers (GPTBot, Claude-Web, Gemini) — ✅
- Content accessible without JavaScript — ✅ (static HTML)
