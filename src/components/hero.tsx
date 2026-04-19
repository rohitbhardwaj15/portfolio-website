import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-10">
      {/* Soft sky arc bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[55vh] pointer-events-none">
        <div className="absolute inset-0 arc-gradient rounded-t-[100%] scale-x-[1.4] origin-bottom" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 glow opacity-60" />

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute top-32 md:top-40 left-6 md:left-10 font-mono text-xs uppercase tracking-[0.3em] text-cream/60"
      >
        ◆ Portfolio &mdash; 2026
      </motion.div>

      {/* Main headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="font-display font-light text-cream text-[18vw] md:text-[12vw] leading-[0.85] tracking-tighter"
        >
          Rohit
          <br />
          <span className="italic font-normal text-[var(--plum-deep)]">Bhardwaj</span>
        </motion.h1>

        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="md:col-span-5 font-mono text-xs uppercase tracking-[0.25em] text-[var(--plum-deep)]/70"
          >
            ① Full Stack Developer
            <br />② AI &amp; Web Engineer
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="md:col-span-6 md:col-start-7 font-display text-xl md:text-2xl leading-snug text-[var(--plum-deep)] text-balance"
          >
            I build intelligent, scalable, and user-focused web applications powered by modern technologies and AI.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--plum-deep)]/60 flex flex-col items-center gap-2"
      >
        Scroll to explore
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-10 bg-[var(--plum-deep)]/40"
        />
      </motion.div>
    </section>
  );
}
