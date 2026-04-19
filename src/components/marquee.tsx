export function Marquee() {
  const text = "Full Stack Developer ✦ React ✦ Node.js ✦ AI Integration ✦ Scalable Systems ✦ Clean Architecture ✦ ";
  return (
    <div className="relative overflow-hidden border-y border-cream/10 py-6 bg-[var(--plum-deep)]">
      <div className="flex marquee-track whitespace-nowrap">
        <div className="flex shrink-0 items-center gap-8 pr-8 font-display italic text-3xl md:text-5xl text-cream/90">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-8 pr-8 font-display italic text-3xl md:text-5xl text-cream/90" aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
