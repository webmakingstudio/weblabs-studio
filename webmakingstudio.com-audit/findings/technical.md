# Technical SEO — webmakingstudio.com

**Score: 35/100** | **Weight: 22%**

## Hosting & Infrastructure
- **Server:** Vercel
- **HTTPS:** ✅ Enforced (redirect www→non-www)
- **HSTS:** ✅ `max-age=63072000` (2 years)
- **Cache:** ✅ Working (`x-vercel-cache: HIT`)
- **CORS:** ⚠️ `access-control-allow-origin: *` (too permissive)
- **Redirect type:** ❌ HTTP 307 (temporary) — should be 301 (permanent)

## Security Headers
| Header | Status |
|--------|--------|
| `strict-transport-security` | ✅ Present |
| `content-security-policy` | ❌ Missing |
| `x-frame-options` | ❌ Missing |
| `x-content-type-options` | ❌ Missing |
| `referrer-policy` | ❌ Missing |
| `permissions-policy` | ❌ Missing |

## robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://webmakingstudios.com/sitemap.xml  ← ❌ WRONG DOMAIN (plural "studios")
```
**Critical:** The domain is `webmakingstudio.com` (singular) but robots.txt references `webmakingstudios.com` (plural). Google fetches robots.txt from the correct domain but the sitemap URL inside it points to the wrong domain.

Also: Comment says legal pages have `meta noindex` — they do NOT.

## Sitemap
- 4 URLs (home, #recursos fragment, aviso-legal, politica-de-privacidad)
- ❌ Fragment URL (`#recursos`) — Google ignores fragments
- ❌ `lastmod` 2026-07-06 not updated per-change
- ✅ Hreflang annotations included
- ✅ Valid XML

## Crawlability
- ❌ auditoria.html is fully indexable with sensitive security data exposed
- ❌ Single-page architecture limits crawl depth to 1
