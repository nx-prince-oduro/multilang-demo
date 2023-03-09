import { storyblokEditable } from "@storyblok/react";

export default function SocialProof({ blok, locales, locale }) {
  return (
    <div {...storyblokEditable(blok)} className="max-w-full">
      <div className="container mx-auto my-10">
        {locale === "fr" ? (
          <>
            <h1 className="font-bold text-7xl">{blok.mainText}</h1>
            <h3 className="text-4xl font-medium">{blok.subText}</h3>
          </>
        ) : (
          <>
            <h3 className="text-3xl font-medium">{blok.subText}</h3>
            <h1 className="font-bold text-7xl">{blok.mainText}</h1>
          </>
        )}
      </div>
    </div>
  );
}
