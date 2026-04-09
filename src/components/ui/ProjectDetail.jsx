import { useEffect } from "react";

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    if (project) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-ink/60 backdrop-blur-md p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-paper rounded-3xl max-w-[680px] w-full max-h-[85vh] overflow-y-auto p-10 md:p-12 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-5 right-5 w-10 h-10 rounded-full border border-divider bg-surface flex items-center justify-center text-muted hover:bg-ink hover:text-paper hover:border-ink transition-colors"
        >
          ✕
        </button>

        <p className="font-mono text-xs text-accent tracking-widest mb-2 font-medium">
          PROJET {project.num}
        </p>
        <h3 className="font-display text-3xl mb-3">{project.title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((t) => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full bg-ink text-paper">
              {t}
            </span>
          ))}
        </div>

        <p className="text-muted leading-relaxed mb-8">{project.summary}</p>

        {/* Details */}
        <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
          Détails techniques
        </h4>
        <ul className="mb-8">
          {project.details.map((d, i) => (
            <li key={i} className="flex gap-2.5 py-2.5 border-b border-divider text-muted text-sm leading-relaxed">
              <span className="text-accent font-bold shrink-0">→</span>
              {d}
            </li>
          ))}
        </ul>

        {/* Results */}
        <h4 className="text-xs font-bold uppercase tracking-wider text-accent2 mb-3">
          Résultats
        </h4>
        <div className="flex flex-col gap-2">
          {project.results.map((r, i) => (
            <div key={i} className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-accent2/[0.06] text-sm">
              <span className="text-accent2 text-lg shrink-0">✓</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
