module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "fr",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilang-demo-chi.vercel.app/",
        defaultLocale: "en",
      },
      {
        domain: "https://multilang-de.vercel.app/",
        defaultLocale: "de",
      },
      {
        domain: "https://multilang-fr-eight.vercel.app/",
        defaultLocale: "fr",
      },
    ],
  },
  trailingSlash: true,
};
