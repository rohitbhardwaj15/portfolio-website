import { motion } from "framer-motion";

export function ProblemSolving() {
  return (
    <section
      id="problem-solving"
      className="relative px-6 md:px-10 py-32 md:py-48 max-w-7xl mx-auto"
    >
      <div className="mb-16 md:mb-24">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)] mb-4">
          ✦ Foundations
        </div>
        <h2 className="font-display font-light text-cream text-5xl md:text-8xl leading-none">
          Problem solving
          <br />
          <span className="italic">& core skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream/10 border border-cream/10 rounded-2xl overflow-hidden">
        {/* Card 1 — DSA */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="group relative bg-background p-8 md:p-12 flex flex-col gap-6 hover:bg-cream/[0.03] transition-colors duration-500"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[var(--sky-soft)]">01</span>
            <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-cream/15 rounded-full text-cream/60">
              Algorithms
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-5xl text-cream leading-none">
            Problem <span className="italic">Solving</span>
          </h3>

          <div className="space-y-4 text-cream/70 leading-relaxed">
            <p>
              Solved data structures and algorithms problems focusing on efficiency, optimization,
              and clean logic building.
            </p>
            <p>
              Strong understanding of arrays, strings, recursion, trees, graphs, and dynamic
              programming.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {["Arrays", "Recursion", "Trees", "Graphs", "DP"].map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-cream/15 rounded-full text-cream/70"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://github.com/rohitbhardwaj15/DSA"
            target="_blank"
            rel="noreferrer"
            className="mt-auto inline-flex items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.25em] text-cream border border-cream/20 rounded-full px-5 py-3 hover:bg-cream hover:text-background transition-colors duration-300"
          >
            View DSA Work
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.article>

        {/* Card 2 — Core CS */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group relative bg-background p-8 md:p-12 flex flex-col gap-6 hover:bg-cream/[0.03] transition-colors duration-500"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[var(--sky-soft)]">02</span>
            <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-cream/15 rounded-full text-cream/60">
              Fundamentals
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-5xl text-cream leading-none">
            Core <span className="italic">Computer Science</span>
          </h3>

          <div className="space-y-4 text-cream/70 leading-relaxed">
            <p>
              Strong foundation in SQL, Object-Oriented Programming, and core problem-solving
              concepts.
            </p>
            <p>
              Experienced in writing optimized queries, designing modular code, and applying core
              CS principles in real-world applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            {["SQL", "OOP", "Data Structures"].map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-cream/15 rounded-full text-cream/70"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
