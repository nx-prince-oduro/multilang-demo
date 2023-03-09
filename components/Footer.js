import { storyblokEditable } from "@storyblok/react";

export default function Footer({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="h-40 max-w-full bg-slate-200">
      <div className="container flex mx-auto text-xl font-bold">
        <div className="grow">{blok.about}</div>
        <div className="grow">{blok.services}</div>
        <div className="grow">{blok.contact}</div>
      </div>
    </div>
  );
}
