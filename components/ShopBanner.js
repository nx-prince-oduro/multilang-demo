import { storyblokEditable } from "@storyblok/react";

export default function ShopBanner({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="max-w-full my-10 bg-slate-100">
      <div className="flex justify-center ">
        <img src={blok.bannerImg.filename} alt="" />
      </div>
    </div>
  );
}
