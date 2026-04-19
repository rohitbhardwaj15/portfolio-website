import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function SiteNav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between mix-blend-difference"
    >
      <Link to="/" className="font-display text-xl tracking-tight text-cream">
        <span className="italic">Rohit</span> Bhardwaj
      </Link>
      <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-cream/80">
        <a href="#about" className="hover:text-cream transition-colors">
          <span className="text-[var(--sky-soft)] mr-2">①</span>About
        </a>
        <a href="#work" className="hover:text-cream transition-colors">
          <span className="text-[var(--sky-soft)] mr-2">②</span>Work
        </a>
        <a href="#skills" className="hover:text-cream transition-colors">
          <span className="text-[var(--sky-soft)] mr-2">③</span>Skills
        </a>
        <a href="#contact" className="hover:text-cream transition-colors">
          <span className="text-[var(--sky-soft)] mr-2">④</span>Contact
        </a>
      </nav>
      <a
        href="mailto:rohitbhardwaj1714@gmail.com"
        className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream/80 hover:text-cream"
      >
        <span className="size-2 rounded-full bg-[var(--sky-soft)] animate-pulse" />
        Available
      </a>
    </motion.header>
  );
}
