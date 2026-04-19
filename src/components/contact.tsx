import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-32 md:py-48 bg-[var(--plum-deep)] overflow-hidden">
      <div className="absolute inset-0 glow opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)] mb-8">
          ✦ Contact
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display font-light text-cream text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter"
        >
          Let's build
          <br />
          <span className="italic text-[var(--sky-soft)]">something</span>
          <br />
          impactful.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <a
            href="mailto:rohitbhardwaj1714@gmail.com"
            className="md:col-span-7 group inline-flex items-center gap-4 font-display text-2xl md:text-4xl text-cream hover:text-[var(--sky-soft)] transition-colors"
          >
            <span className="underline decoration-cream/30 decoration-1 underline-offset-8 group-hover:decoration-[var(--sky-soft)]">
              rohitbhardwaj1714@gmail.com
            </span>
            <svg className="size-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </a>

          <div className="md:col-span-5 flex flex-col gap-3 font-mono text-xs uppercase tracking-widest">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-cream/15 py-3 text-cream/80 hover:text-[var(--sky-soft)] hover:border-[var(--sky-soft)] transition-colors">
              <span>① GitHub</span>
              <span>→</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-cream/15 py-3 text-cream/80 hover:text-[var(--sky-soft)] hover:border-[var(--sky-soft)] transition-colors">
              <span>② LinkedIn</span>
              <span>→</span>
            </a>
            <a href="mailto:rohitbhardwaj1714@gmail.com" className="flex items-center justify-between border-b border-cream/15 py-3 text-cream/80 hover:text-[var(--sky-soft)] hover:border-[var(--sky-soft)] transition-colors">
              <span>③ Email</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
