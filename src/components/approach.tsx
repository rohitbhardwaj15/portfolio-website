import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Planning & Strategy",
    desc: "Define goals, audience, and structure before development.",
  },
  {
    num: "02",
    title: "Development & Iteration",
    desc: "Build step-by-step while refining performance and design.",
  },
  {
    num: "03",
    title: "Launch & Optimization",
    desc: "Deliver scalable, optimized, and production-ready applications.",
  },
];

export function Approach() {
  return (
    <section className="relative px-6 md:px-10 py-32 md:py-48 bg-[var(--plum-deep)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)]">
            ✦ My Approach
          </div>
          <h2 className="md:col-span-9 font-display font-light text-cream text-4xl md:text-6xl leading-tight text-balance">
            From <span className="italic text-[var(--sky-soft)]">idea</span> to launch — a deliberate process.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] }}
              whileHover={{ y: -8 }}
              className="group relative p-8 md:p-10 border border-cream/10 bg-background/40 backdrop-blur-sm overflow-hidden transition-colors hover:border-[var(--sky-soft)]/40"
            >
              <div className="absolute -top-10 -right-10 size-40 rounded-full bg-[var(--sky-soft)]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="font-display text-7xl md:text-8xl text-cream/10 leading-none mb-8 group-hover:text-[var(--sky-soft)]/30 transition-colors">
                  {s.num}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-cream mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-cream/60 leading-relaxed">{s.desc}</p>
                <div className="mt-8 h-px bg-cream/10 group-hover:bg-[var(--sky-soft)]/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
