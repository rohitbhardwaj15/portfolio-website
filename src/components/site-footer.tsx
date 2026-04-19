export function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-cream/10 bg-[var(--plum-deep)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-cream/50">
        <div>© 2026 Rohit Bhardwaj</div>
        <div className="italic font-display normal-case text-base text-cream/70">
          Built with code, creativity, and curiosity.
        </div>
      </div>
    </footer>
  );
}
