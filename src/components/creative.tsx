import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Creative() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <section
      ref={ref}
      className="relative px-6 md:px-10 py-32 md:py-48 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 glow opacity-30 pointer-events-none" />

      {/* Floating orb */}
      <motion.div
        style={{ rotate, scale }}
        className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[80vw] md:w-[55vw] aspect-square rounded-full pointer-events-none"
      >
        <div className="absolute inset-0 rounded-full arc-gradient opacity-60 blur-2xl" />
        <div className="absolute inset-8 rounded-full border border-[var(--sky-soft)]/30" />
        <div className="absolute inset-20 rounded-full border border-[var(--sky-soft)]/20" />
        <div className="absolute inset-32 rounded-full border border-[var(--sky-soft)]/10" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)]">
            ✦ Creative Lab
          </div>
          <h2 className="md:col-span-9 font-display font-light text-cream text-4xl md:text-6xl leading-tight text-balance">
            Where <span className="italic text-[var(--sky-soft)]">motion</span>, code, and design meet.
          </h2>
        </div>

        <motion.div style={{ y }} className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 md:mt-32">
          <div className="md:col-span-6 md:col-start-2 space-y-6">
            <p className="font-display text-3xl md:text-4xl text-cream leading-tight">
              I craft interfaces that <span className="italic text-[var(--sky-soft)]">respond</span>, not just react —
              experiences that feel alive in the browser.
            </p>
            <p className="text-cream/60 leading-relaxed max-w-xl">
              From scroll-driven 3D scenes with Three.js to choreographed micro-interactions
              with GSAP and Framer Motion, every detail is tuned for rhythm and clarity.
            </p>

            <div className="flex flex-wrap gap-2 pt-4 font-mono text-xs uppercase tracking-widest">
              {["Three.js", "GSAP", "Framer Motion", "WebGL", "Lenis"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-2 border border-cream/15 text-cream/70 hover:border-[var(--sky-soft)] hover:text-[var(--sky-soft)] transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
