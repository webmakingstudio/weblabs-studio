# Niche Landing Pages for WebMakingStudios

**Date:** 2026-07-17
**Status:** Approved

## Context

WebMakingStudios needs niche-specific landing pages to capture SEO traffic from dental clinics and aesthetic medicine clinics in Barcelona/Spain. These pages complement the generic homepage without replacing it, targeting high-value medical-esthetic sectors with specific keywords.

## Design

Two new HTML pages in the project root, following the same design system as `index.html`:

### Files
- `landing-pages-clinicas-dentales.html`
- `landing-pages-clinicas-estetica.html`

### Structure (each page)
1. **Hero** — Niche-specific headline + CTA to contact form
2. **Problema** — 3 pain points of the sector
3. **Solucion** — How landing pages solve each pain point, referencing the 3 packages
4. **Que incluye** — Deliverables adapted to the niche (RGPD, Google Ads integration)
5. **Por que yo** — Junior specialist, launch pricing, fast delivery
6. **Contacto + formulario** — Same form from index.html

### Technical decisions
- Reuse `styles.css` as-is (brand consistency)
- Reuse `i18n.js` and `script.js` (form handling, theme toggle)
- Spanish only (target audience is Spain-based clinics)
- `ProfessionalService` structured data with medical sector focus
- Self-canonical URLs

### SEO keywords
- Dental: "landing page clinica dental", "pagina web dentista Barcelona", "diseno web clinica dental"
- Estetica: "landing page clinica estetica", "web medicina estetica Barcelona", "diseno web centro estetico"

### Pricing (launch — first 5 clients)
- Express: €490
- Pro: €950
- Funnel: €1,900
- Maintenance: €100/month

## Verification
- Open each page in browser, verify layout matches main site
- Check form submission works (Resend API)
- Verify theme toggle works
- Run Lighthouse: >90 performance, >90 accessibility
- Validate HTML (W3C)
