export default function Footer() {
  const scrollToTop = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-ink border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Nean Marc Moran Fofana. Conçu & développé avec passion.
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="w-10 h-10 rounded-full border border-white/10 bg-transparent text-white/40 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
