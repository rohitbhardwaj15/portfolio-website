import { motion } from "framer-motion";

const certifications = [
  {
    issuer: "SAP",
    title: "Back-End Developer",
    focus: "ABAP Cloud",
    note: "SAP Certified — professional back-end development on the ABAP Cloud platform.",
  },
  {
    issuer: "Oracle",
    title: "Certified Foundations Associate",
    focus: "Agentic AI",
    note: "Oracle Certified — foundational knowledge of agentic AI systems and workflows.",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Modern AI",
    focus: "Modern AI",
    note: "Completed course covering how modern AI works and where it creates real value.",
  },
  {
    issuer: "Amazon Web Services",
    title: "WS Academy Graduate",
    focus: "Cloud Foundations",
    note: "Training graduate — cloud fundamentals across core AWS services and architecture.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 md:px-10 py-32 md:py-48">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)]">
            ✦ Credentials
          </div>
          <h2 className="md:col-span-9 font-display font-light text-cream text-4xl md:text-6xl leading-tight text-balance">
            Certified where it <span className="italic text-[var(--sky-soft)]">counts</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10">
          {certifications.map((c, i) => (
            <motion.div
              key={c.issuer}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.65, 0, 0.35, 1] }}
              className="group bg-[var(--plum-deep)] p-8 md:p-10 min-h-[320px] flex flex-col justify-between hover:bg-background transition-colors"
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-[var(--sky-soft)]">
                  0{i + 1} / Credential
                </div>
                <div className="mt-6 font-mono text-xs uppercase tracking-widest text-cream/50 group-hover:text-cream/80 transition-colors">
                  {c.issuer}
                </div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl text-cream leading-snug text-balance">
                  {c.title}
                </h3>
                <div className="mt-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--sky-soft)]">
                  <span className="size-1.5 rounded-full bg-[var(--sky-soft)]" />
                  {c.focus}
                </div>
              </div>
              <p className="mt-8 font-sans text-sm leading-relaxed text-muted-foreground text-pretty">
                {c.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
