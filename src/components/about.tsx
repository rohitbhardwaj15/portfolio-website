import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-32 md:py-48 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)]">
          ✦ About
        </div>
        <div className="md:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="font-display font-light text-cream text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance"
          >
            I'm a full stack developer passionate about building modern, high-performance web applications and{" "}
            <span className="italic text-[var(--sky-soft)]">AI-powered solutions.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-10 md:mt-14 max-w-2xl text-lg md:text-xl text-cream/70 leading-relaxed"
          >
            I specialize in React, Node.js, and scalable backend systems, with a strong focus on problem-solving, clean architecture, and creating meaningful user experiences.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
