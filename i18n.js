// i18n.js — Shared i18n engine + theme toggle for WebMakingStudios
// Used by both the main landing (script.js) and the legal pages (legal.js).

// ── Theme toggle ───────────────────────────────────────────────────
(function initThemeToggle() {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var root = document.documentElement;
    var current = root.getAttribute("data-theme");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("wms-theme", next);
    } catch {
      // Storage unavailable — theme still works for this session.
    }
  });
})();

// ── Shared i18n engine ─────────────────────────────────────────────
function getStoredLanguage(translations, storageKey) {
  try {
    const stored = window.localStorage.getItem(storageKey);
    return translations[stored] ? stored : null;
  } catch {
    return null;
  }
}

function getUrlLanguage(translations) {
  try {
    var p = new URLSearchParams(window.location.search);
    var lang = p.get("lang");
    return translations[lang] ? lang : null;
  } catch {
    return null;
  }
}

/**
 * Creates an i18n instance bound to a translations table and an optional
 * language-change callback.
 *
 * The HTML document signals which meta keys to update via data attributes on
 * `<html>`:
 *   data-i18n-title="metaTitle"
 *   data-i18n-meta-description="metaDescription"
 *
 * @param {object} options
 * @param {object} options.translations   Translation tables keyed by language code.
 * @param {string} [options.storageKey]   localStorage key (default: "wms-language").
 * @param {string} [options.defaultLanguage]  Fallback language (default: "es").
 * @param {function} [options.onLanguageChange]  Called after every language switch.
 * @returns {{ t: function, applyLanguage: function, init: function, currentLanguage: string }}
 */
function createI18n({
  translations,
  storageKey = "wms-language",
  defaultLanguage = "es",
  onLanguageChange,
} = {}) {
  let currentLanguage =
    getUrlLanguage(translations) ||
    getStoredLanguage(translations, storageKey) ||
    defaultLanguage;

  function t(key) {
    return (
      translations[currentLanguage]?.[key] ??
      translations[defaultLanguage]?.[key] ??
      ""
    );
  }

  function applyLanguage(language) {
    if (!translations[language]) {
      language = defaultLanguage;
    }
    currentLanguage = language;

    const root = document.documentElement;

    // ── Fade-out before switching ─────────────────────────────────
    root.classList.add("i18n-switching");

    requestAnimationFrame(() => {
      root.lang = currentLanguage;

      // ── Text content ──────────────────────────────────────────
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        node.textContent = t(node.dataset.i18n);
      });

      // ── HTML content (use sparingly — only for links) ─────────
      document.querySelectorAll("[data-i18n-html]").forEach((node) => {
        node.innerHTML = t(node.dataset.i18nHtml);
      });

      // ── Placeholder attributes ────────────────────────────────
      document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
        node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
      });

      // ── aria-label attributes ─────────────────────────────────
      document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
        node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
      });

      // ── Language toggle buttons ───────────────────────────────
      document.querySelectorAll("[data-language]").forEach((button) => {
        button.classList.toggle(
          "is-active",
          button.dataset.language === currentLanguage
        );
      });

      // ── Document title ────────────────────────────────────────
      const titleKey = root.dataset.i18nTitle;
      if (titleKey) {
        document.title = t(titleKey);
      }

      // ── Meta description ──────────────────────────────────────
      const metaDescription = document.querySelector('meta[name="description"]');
      const descriptionKey = root.dataset.i18nMetaDescription;
      if (metaDescription && descriptionKey) {
        metaDescription.setAttribute("content", t(descriptionKey));
      }

      // ── Page-specific hook ────────────────────────────────────
      if (onLanguageChange) {
        onLanguageChange(currentLanguage);
      }

      try {
        window.localStorage.setItem(storageKey, currentLanguage);
      } catch {
        // Storage unavailable — the session language still works.
      }

      // ── Fade-in ──────────────────────────────────────────────
      root.classList.remove("i18n-switching");
    });
  }

  function init() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(button.dataset.language);
      });
    });

    applyLanguage(currentLanguage);
  }

  return {
    t,
    applyLanguage,
    init,
    get currentLanguage() {
      return currentLanguage;
    },
  };
}
