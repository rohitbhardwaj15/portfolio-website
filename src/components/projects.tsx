import { motion } from "framer-motion";

const projects = [
  {
    n: "01",
    title: "SurakshaPay",
    subtitle: "AI Insurance Platform",
    description:
      "An AI-powered insurance solution designed to simplify policy management and risk assessment through intelligent automation. Built features like smart claim processing, user authentication, and dynamic dashboards for real-time insights.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
  },
  {
    n: "02",
    title: "AI Resume Builder",
    subtitle: "Smart Resume Generation",
    description:
      "A smart resume generation platform that leverages AI to create optimized, professional resumes based on user input. Implemented dynamic templates, content suggestions, and real-time preview for enhanced user experience.",
    stack: ["React", "Node.js", "Tailwind CSS", "AI APIs"],
  },
  {
    n: "03",
    title: "SmartQueue",
    subtitle: "AI-Powered Virtual Queue Optimization",
    description:
      "An intelligent queue management system that reduces wait times using predictive analytics and real-time data processing. Designed to optimize service flow in high-traffic environments with automated queue handling.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 md:px-10 py-32 md:py-48 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)] mb-4">✦ Featured Work</div>
          <h2 className="font-display font-light text-cream text-5xl md:text-8xl leading-none">
            Selected
            <br />
            <span className="italic">projects</span>
          </h2>
        </div>
        <div className="hidden md:block font-mono text-xs uppercase tracking-widest text-cream/40">
          {projects.length} / {projects.length}
        </div>
      </div>

      <div className="space-y-px border-t border-cream/10">
        {projects.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative border-b border-cream/10 py-10 md:py-14 grid grid-cols-12 gap-6 hover:bg-cream/[0.02] transition-colors duration-500"
          >
            <div className="col-span-2 md:col-span-1 font-mono text-xs text-[var(--sky-soft)]">{p.n}</div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-display text-3xl md:text-5xl text-cream leading-none">
                {p.title}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cream/50">{p.subtitle}</p>
            </div>
            <p className="col-span-12 md:col-span-5 text-cream/70 leading-relaxed">{p.description}</p>
            <div className="col-span-12 md:col-span-2 flex flex-wrap gap-1.5 md:justify-end items-start">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-cream/15 rounded-full text-cream/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
