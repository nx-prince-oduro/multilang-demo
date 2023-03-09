module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
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
