import { storyblokEditable } from "@storyblok/react";

export default function Hero({ blok }) {
  return (
    <div className="max-w-full">
      <div className="container mx-auto my-10" {...storyblokEditable(blok)}>
        <video className="w-full" autoPlay alt={blok.alt} muted>
          <source src={blok.heroVid.filename}></source>
        </video>
      </div>
    </div>
  );
}
