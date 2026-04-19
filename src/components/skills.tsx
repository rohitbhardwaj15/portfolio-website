import { motion } from "framer-motion";

const groups = [
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Database", items: ["MongoDB", "MySQL"] },
  { label: "Tools", items: ["Git", "Docker", "AWS"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-10 py-32 md:py-48 bg-[var(--plum-deep)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)]">
            ✦ Toolkit
          </div>
          <h2 className="md:col-span-9 font-display font-light text-cream text-4xl md:text-6xl leading-tight text-balance">
            Tools that turn ideas into <span className="italic text-[var(--sky-soft)]">production-ready</span> products.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[var(--plum-deep)] p-8 md:p-10 min-h-[240px] flex flex-col justify-between group hover:bg-background transition-colors"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--sky-soft)]">
                0{i + 1} / {g.label}
              </div>
              <div className="space-y-2">
                {g.items.map((item) => (
                  <div
                    key={item}
                    className="font-display text-2xl md:text-3xl text-cream group-hover:translate-x-1 transition-transform"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
