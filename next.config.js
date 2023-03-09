module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "de",
    localeDetection: true,
    domains: [
      {
        domain: "https://multilang-demo-chi.vercel.app",
        defaultLocale: "en",
      },
      {
        domain: "https://multilang-de-nine.vercel.app",
        defaultLocale: "de",
      },
      {
        domain: "https://multilang-fr-eight.vercel.app",
        defaultLocale: "fr",
      },
    ],
  },
  trailingSlash: true,
};
