import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function Card({ blok }) {
  return (
    <div className="">
      <div
        className="container grid grid-cols-4 gap-6 mx-auto"
        {...storyblokEditable(blok)}
      >
        {blok.card.map((nestedBlok, index) => (
          <div className="" key={index}>
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            <div className="flex justify-between overflow-hidden bg-orange-400 w-80 h-36">
              <div>
                <h1 className="p-4 text-2xl font-bold text-white">
                  {nestedBlok.cardTitle}
                </h1>
                {/* <h5>{nestedBlok.cardText}</h5> */}
              </div>
              <img src={nestedBlok.cardImg.filename} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
