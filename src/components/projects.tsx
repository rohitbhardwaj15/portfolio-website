import { motion } from "framer-motion";
import surakshapayImg from "@/assets/project-surakshapay.png";
import smartqueueImg from "@/assets/project-smartqueue.png";
import resumeImg from "@/assets/project-resume.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";

type Project = {
  n: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  backend?: string;
  status?: string;
  image?: string;
};

const projects: Project[] = [
  {
    n: "01",
    title: "SurakshaPay",
    subtitle: "AI Insurance Platform",
    description:
      "An AI-powered insurance solution designed to simplify policy management and risk assessment through intelligent automation. Built features like smart claim processing, user authentication, and dynamic dashboards for real-time insights.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
    github: "https://github.com/rohitbhardwaj15/surakshapay-ai-insurance",
    demo: "https://surakshapay-beige.vercel.app",
    backend: "https://backend-six-theta-80.vercel.app",
    image: surakshapayImg,
  },
  {
    n: "02",
    title: "SmartQueue",
    subtitle: "AI-Powered Virtual Queue Optimization",
    description:
      "An intelligent queue management system that reduces wait times using predictive analytics and real-time data processing. Designed to optimize service flow in high-traffic environments with automated queue handling.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
    github:
      "https://github.com/rohitbhardwaj15/SmartQueue---AI-Powered-Virtual-Queue-Optimization-System",
    demo: "https://smartqueue-ui.vercel.app",
    image: smartqueueImg,
  },
  {
    n: "03",
    title: "AI Resume Builder",
    subtitle: "Smart Resume Generation",
    description:
      "A smart resume generation platform that leverages AI to create optimized, professional resumes based on user input. Implemented dynamic templates, content suggestions, and real-time preview for enhanced user experience.",
    stack: ["React", "Node.js", "Tailwind CSS", "AI APIs"],
    github: "https://github.com/rohitbhardwaj15/AI-RESUME-BUILDER",
    status: "In Progress",
    image: resumeImg,
  },
  {
    n: "04",
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and experience. Designed with smooth animations, clean typography, and a focus on storytelling to create a memorable developer presence.",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/rohitbhardwaj15/portfolio-website-",
    image: portfolioImg,
  },
];

export function Projects() {
  return (
    <section id="work" className="relative px-6 md:px-10 py-32 md:py-48 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--sky-soft)] mb-4">
            ✦ Featured Work
          </div>
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
            <div className="col-span-2 md:col-span-1 font-mono text-xs text-[var(--sky-soft)]">
              {p.n}
            </div>
            <div className="col-span-10 md:col-span-4">
              <h3 className="font-display text-3xl md:text-5xl text-cream leading-none">
                {p.title}
              </h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-cream/50">
                {p.subtitle}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/70 hover:text-[var(--sky-soft)] underline decoration-cream/20 underline-offset-4 transition-colors"
                >
                  GitHub →
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/70 hover:text-[var(--sky-soft)] underline decoration-cream/20 underline-offset-4 transition-colors"
                  >
                    Live Demo →
                  </a>
                )}
                {p.backend && (
                  <a
                    href={p.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/70 hover:text-[var(--sky-soft)] underline decoration-cream/20 underline-offset-4 transition-colors"
                  >
                    Backend →
                  </a>
                )}
                {p.status && (
                  <span className="text-[var(--sky-soft)]/80">● {p.status}</span>
                )}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              {p.image ? (
                <a
                  href={p.demo || p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${p.title}`}
                  className="relative block overflow-hidden rounded-lg border border-cream/10 bg-cream/[0.02]"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 md:p-5 bg-gradient-to-t from-[var(--plum-deep)]/90 via-[var(--plum-deep)]/40 to-transparent opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--sky-soft)]">
                      {p.n} / {p.subtitle}
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <h4 className="font-display text-2xl md:text-3xl text-cream leading-none italic">
                        {p.title}
                      </h4>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-cream flex items-center gap-2 whitespace-nowrap">
                        View Project
                        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              ) : (
                <p className="text-cream/70 leading-relaxed">{p.description}</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col gap-3">
              {p.image && (
                <p className="text-cream/70 leading-relaxed text-sm">{p.description}</p>
              )}
              <div className="flex flex-wrap gap-1.5 items-start">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-cream/15 rounded-full text-cream/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
