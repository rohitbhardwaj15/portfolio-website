import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-48 bg-[var(--plum-deep)] overflow-hidden">
      <div className="absolute inset-0 arc-gradient opacity-30" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)] mb-8"
        >
          ✦ Ready when you are
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display font-light text-cream text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-balance"
        >
          Ready to build something
          <br />
          <span className="italic text-[var(--sky-soft)]">impactful?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-cream/70 text-lg md:text-xl max-w-xl mx-auto"
        >
          Let's create something that stands out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="mailto:rohitbhardwaj1714@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-5 bg-cream text-[var(--plum-deep)] font-mono text-xs uppercase tracking-widest hover:bg-[var(--sky-soft)] transition-colors"
          >
            Get in Touch
            <svg className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
