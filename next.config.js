module.exports = {
  reactStrictMode: true,

  images: {},
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "de",
    localeDetection: true,
    domains: [
      {
        domain: "exampleigus.com",
        defaultLocale: "en",
      },
      {
        domain: "https://multilang-de.vercel.app/",
        defaultLocale: "de",
      },
      {
        domain: "https://multilang-fr.vercel.app/",
        defaultLocale: "fr",
      },
    ],
  },
  trailingSlash: true,
};
