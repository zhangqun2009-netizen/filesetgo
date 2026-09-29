(() => {
  const dataElement = document.getElementById("translations");
  if (!dataElement) return;
  let translations;
  try {
    translations = JSON.parse(dataElement.textContent);
  } catch (error) {
    console.error("The page translations could not be loaded.", error);
    return;
  }

  const available = Object.keys(translations);
  const normalise = (value) => {
    const language = (value || "").toLowerCase();
    if (language.startsWith("zh-hant") || language === "zh-hk" || language === "zh-mo") return "zh-Hant-HK";
    if (language.startsWith("zh")) return "zh-Hans";
    if (language.startsWith("ja")) return "ja";
    if (language.startsWith("ko")) return "ko";
    if (language.startsWith("en")) return "en";
    return "zh-Hans";
  };

  const params = new URLSearchParams(location.search);
  const requested = params.get("lang") || decodeURIComponent(location.hash.slice(1));
  let current = available.includes(requested) ? requested : normalise(navigator.language);

  const apply = (language, updateURL) => {
    if (!available.includes(language)) return;
    current = language;
    const copy = translations[language];
    document.documentElement.lang = language;
    document.title = copy.title;
    const description = document.getElementById("meta-description");
    if (description) description.content = copy.description;

    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = copy[element.dataset.copy];
      if (typeof value === "string") element.textContent = value.replace(/\\n/g, "\n");
    });
    document.querySelectorAll("[data-copy-alt]").forEach((element) => {
      const value = copy[element.dataset.copyAlt];
      if (typeof value === "string") element.alt = value;
    });
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-current", button.dataset.lang === language ? "true" : "false");
    });

    if (updateURL && location.protocol !== "file:") {
      const next = new URL(location.href);
      next.searchParams.set("lang", language);
      next.hash = "";
      history.replaceState(null, "", next);
    }
  };

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.lang, true));
  });

  document.querySelectorAll('a[href^="./"]').forEach((anchor) => {
    try {
      const destination = new URL(anchor.href, location.href);
      if (destination.origin !== location.origin) return;
      if (!destination.searchParams.has("lang")) destination.searchParams.set("lang", current);
      anchor.href = destination.href;
    } catch (_) {
      // Keep a valid in-page link unchanged if it cannot be parsed as a URL.
    }
  });

  apply(current, false);
})();
