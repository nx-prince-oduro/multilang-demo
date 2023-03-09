import { storyblokEditable } from "@storyblok/react";
import { AiOutlineRight } from "react-icons/ai";

export default function Solutions({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="max-w-full my-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold">{blok.headline}</h2>
        <div className="flex gap-5 my-5 text-xl font-medium">
          <button className="flex items-center justify-between p-4 grow bg-slate-200 w-96">
            {blok.button1}
            <span>
              <AiOutlineRight color="orange" />
            </span>
          </button>
          <button className="flex items-center justify-between p-4 grow bg-slate-200 w-96">
            {blok.button2}
            <span>
              <AiOutlineRight color="orange" />
            </span>
          </button>
          <button className="flex items-center justify-between p-4 grow bg-slate-200 w-96">
            {blok.button3}
            <span>
              <AiOutlineRight color="orange" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
