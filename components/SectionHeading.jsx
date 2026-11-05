export default function SectionHeading({ title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl">{title}</h2>
      {text && <p className="mt-4 leading-relaxed text-cream/70">{text}</p>}
      <span className={`mt-6 block h-px w-16 bg-brass ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
