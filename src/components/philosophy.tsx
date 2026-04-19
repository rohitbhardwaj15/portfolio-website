import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-56 max-w-6xl mx-auto text-center">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)] mb-8">
        ✦ Philosophy
      </div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="font-display font-light text-cream text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-balance"
      >
        I focus on building solutions that combine{" "}
        <span className="italic text-[var(--sky-soft)]">performance</span>,{" "}
        <span className="italic text-[var(--sky-soft)]">scalability</span>, and{" "}
        <span className="italic text-[var(--sky-soft)]">intelligence</span> &mdash; creating impactful digital products through modern technology and continuous craft.
      </motion.p>
    </section>
  );
}
