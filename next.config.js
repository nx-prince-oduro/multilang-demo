module.exports = {
  reactStrictMode: true,
  images: {},
  i18n: {
    locales: ["en", "de", "fr", "en-gb"],
    defaultLocale: "en",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilang-demo-chi.vercel.app",
        defaultLocale: "en",
        locales: ["en-gb"],
      },
      { domain: "https://multilang-de-nine.vercel.app", defaultLocale: "de" },
      { domain: "https://multilang-fr-eight.vercel.app", defaultLocale: "fr" },
    ],
  },
  trailingSlash: true,
};
