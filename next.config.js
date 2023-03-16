module.exports = {
  reactStrictMode: true,
  images: {},
  i18n: {
    locales: ["en", "de", "fr", "en-GB"],
    defaultLocale: "fr",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilang-demo-chi.vercel.app",
        defaultLocale: "en",
        locales: ["en-GB"],
      },
      { domain: "https://multilang-fr-eight.vercel.app", defaultLocale: "fr" },
      { domain: "https://multilang-de-nine.vercel.app", defaultLocale: "de" },
    ],
  },
  trailingSlash: true,
};
