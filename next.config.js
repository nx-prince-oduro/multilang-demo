module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["default", "en", "de", "fr"],
    defaultLocale: "en",
    localeDetection: true,
    domains: [
      {
        domain: "exampleigus.com",
        defaultLocale: "en-US",
      },
      {
        domain: "exampleigus.de",
        defaultLocale: "de-de",
      },
      {
        domain: "exampleigus.fr",
        defaultLocale: "fr-fr",
      },
    ],
  },
  trailingSlash: true,
};
