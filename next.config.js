module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["de"],
    defaultLocale: "de",
    localeDetection: true,
    domains: [
      {
        domain: "exampleigus.com",
        defaultLocale: "en",
      },
      {
        domain: "exampleigus.de",
        defaultLocale: "de",
      },
      {
        domain: "exampleigus.fr",
        defaultLocale: "fr",
      },
    ],
  },
  trailingSlash: true,
};
