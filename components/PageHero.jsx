import SafeImage from "./SafeImage";

// Short banner at the top of every inner page. The fixed navbar sits on top of it.
export default function PageHero({ title, text, image }) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-roast">
      {image && <SafeImage src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/85 via-espresso/60 to-espresso" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-32">
        <h1 className="font-display text-5xl text-cream md:text-7xl">{title}</h1>
        {text && <p className="mt-4 max-w-xl text-lg text-cream/75">{text}</p>}
      </div>
    </section>
  );
}
