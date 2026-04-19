import { motion } from "framer-motion";

const items = [
  {
    year: "01",
    title: "HTML, CSS & JavaScript Foundations",
    desc: "Built personal projects to understand semantic HTML, responsive CSS, and core JavaScript interactions.",
  },
  {
    year: "02",
    title: "MERN Stack Development",
    desc: "Created full-stack applications using MongoDB, Express.js, React.js, and Node.js with API and CRUD operations.",
  },
  {
    year: "03",
    title: "Next.js & Framer Motion",
    desc: "Explored SSR, routing, and UI animations using Framer Motion.",
  },
  {
    year: "04",
    title: "Creative Web with Three.js & GSAP",
    desc: "Built interactive 3D and scroll-based experiences for immersive interfaces.",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="relative px-6 md:px-10 py-32 md:py-48 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)]">
            ✦ Growth Journey
          </div>
          <h2 className="md:col-span-9 font-display font-light text-cream text-4xl md:text-6xl leading-tight text-balance">
            A path of <span className="italic text-[var(--sky-soft)]">continuous</span> learning and craft.
          </h2>
        </div>

        <div className="relative md:pl-12">
          <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-cream/15" />
          <div className="space-y-16 md:space-y-24">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
                className="relative pl-10 md:pl-16"
              >
                <div className="absolute -left-1 md:-left-0 top-2 size-3 rounded-full bg-[var(--sky-soft)] shadow-[0_0_0_6px_var(--background),0_0_24px_var(--sky-soft)]" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  <div className="md:col-span-2 font-mono text-xs uppercase tracking-[0.3em] text-cream/50">
                    {item.year}
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-display text-3xl md:text-5xl text-cream leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-cream/70 max-w-2xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
