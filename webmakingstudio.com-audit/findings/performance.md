# Performance (Core Web Vitals) — webmakingstudio.com

**Score: 55/100 (estimated)** | **Weight: 10%**

## Note
No real Lighthouse/CrUX data was available during this audit. The score is estimated based on site architecture. **Run PageSpeed Insights manually for real metrics.**

## Infrastructure Advantages
- Vercel hosting with global CDN
- Cache HIT confirmed (`x-vercel-cache: HIT`)
- HTTPS with HSTS (2 years)
- Small site (~29KB HTML, static)
- Minimal images (1 SVG logo)

## Known Issues
| Issue | Page | Impact |
|-------|------|--------|
| Missing viewport meta | auditoria.html | Mobile usability error in Search Console |
| No resource hints | All pages | No preconnect/preload for external resources |
| WhatsApp external dependency | Home | May affect LCP if slow to resolve |

## Recommended CWV Targets
| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| INP (Interaction to Next Paint) | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

## Action Items
1. Run PageSpeed Insights for real CWV data
2. Connect Google Search Console for CrUX field data
3. Add viewport meta to auditoria.html
4. Consider adding preconnect for wa.me
5. Test dark mode toggle for CLS impact
