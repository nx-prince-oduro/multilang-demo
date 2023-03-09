import { storyblokEditable } from "@storyblok/react";

export default function Global({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="max-w-full my-10 h-80 bg-zinc-700"
    >
      <div className="container flex items-center justify-center gap-5 mx-auto">
        <div className="w-2/3 space-y-5 text-white">
          <h2 className="text-5xl">{blok.headline}</h2>
          <p>{blok.subText1}</p>
          <p>{blok.subText2}</p>
          <button className="p-4 text-base outline">{blok.button}</button>
        </div>
        <img src={blok.img.filename} className="w-96" alt="" />
      </div>
    </div>
  );
}
