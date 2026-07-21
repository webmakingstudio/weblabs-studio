# Schema & Structured Data — webmakingstudio.com

**Score: 0/100** | **Weight: 10%**

## Current State
**No schema markup detected anywhere on the site.** Zero JSON-LD, zero Microdata, zero RDFa.

## Missing Schema (Priority Order)

### 1. Organization / ProfessionalService (CRITICAL)
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

### 2. Service (x3)
- Landing page para captación
- Rediseño web estratégico
- Mantenimiento y soporte

### 3. WebSite + SearchAction
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "WebMakingStudios",
  "url": "https://webmakingstudio.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://webmakingstudio.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 4. BreadcrumbList
For multi-page architecture once blog/service pages exist.

### 5. FAQ (future)
If FAQ section is added to the homepage or service pages.

## Impact
- No rich results in SERPs
- No Knowledge Graph entity association
- Google cannot confidently identify business type
- AI crawlers cannot extract structured entity data
