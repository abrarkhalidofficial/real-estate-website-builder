export function HeroSection(props: {
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  bgType?: "image" | "video";
  bgSrc?: string;
  overlayOpacity?: number;
}) {
  const { heading, subheading, ctaLabel, ctaHref, bgType = "image", bgSrc, overlayOpacity = 0.35 } = props;
  return (
    <section className="relative grid min-h-[40vh] place-items-center overflow-hidden">
      {bgSrc && (
        bgType === "video" ? (
          <video className="absolute inset-0 h-full w-full object-cover" src={bgSrc} autoPlay loop muted />
        ) : (
          <img className="absolute inset-0 h-full w-full object-cover" src={bgSrc} alt="Hero background" />
        )
      )}
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlayOpacity})` }} />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl">{heading}</h1>
        {subheading && <p className="mt-3 text-white/90">{subheading}</p>}
        {ctaLabel && (
          <a href={ctaHref} className="mt-6 inline-block rounded bg-white/90 px-4 py-2 text-sm font-medium text-black">
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}