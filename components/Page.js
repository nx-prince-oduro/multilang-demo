import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok, locale, locales, defaultLocale }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent
        blok={nestedBlok}
        key={nestedBlok._uid}
        locale={locale}
        locales={locales}
        defaultLocale={defaultLocale}
      />
    ))}
  </main>
);

export default Page;
