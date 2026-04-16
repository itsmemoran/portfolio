import { useEffect, useState } from "react";

export default function CreationLightbox({ item, items, onClose, onNavigate }) {
  const isGallery = item?.type === "gallery";
  const [pageIndex, setPageIndex] = useState(0);

  // Reset page index when the item changes
  useEffect(() => {
    setPageIndex(0);
  }, [item?.id]);

  // Lock body scroll while open
  useEffect(() => {
    if (item) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [item]);

  // Keyboard handling
  // - For galleries: arrows navigate pages, reaching edge -> navigate creations
  // - For single items: arrows always navigate creations
  useEffect(() => {
    if (!item) return;
    const handler = (e) => {
      if (e.key === "Escape") return onClose();

      if (e.key === "ArrowLeft") {
        if (isGallery && pageIndex > 0) {
          setPageIndex((p) => p - 1);
        } else {
          onNavigate(-1);
        }
      }

      if (e.key === "ArrowRight") {
        if (isGallery && pageIndex < item.pages.length - 1) {
          setPageIndex((p) => p + 1);
        } else {
          onNavigate(1);
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [item, isGallery, pageIndex, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  // Render media
  const renderMedia = () => {
    if (item.type === "video") {
      if (item.videoType === "mp4") {
        return (
          <video
            src={item.videoUrl}
            controls
            autoPlay
            className="max-w-full max-h-[65vh] rounded-xl shadow-2xl"
          />
        );
      }
      return (
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={item.videoUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      );
    }

    if (item.type === "gallery") {
      return (
        <img
          src={item.pages[pageIndex]}
          alt={`${item.title} — page ${pageIndex + 1}`}
          className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-2xl"
        />
      );
    }

    // Single image
    return (
      <img
        src={item.source}
        alt={item.title}
        className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
      />
    );
  };

  return (
    <div
      className="fixed inset-0 z-[1000] bg-ink/95 backdrop-blur-md animate-fade-in flex flex-col"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between p-4 md:p-6 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-xs text-accent tracking-wider uppercase shrink-0">
            {currentIndex + 1} / {items.length}
          </span>
          <h3 className="text-paper font-display text-lg md:text-xl truncate">
            {item.title}
          </h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="shrink-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-paper hover:bg-accent hover:border-accent transition-colors flex items-center justify-center"
        >
          ✕
        </button>
      </div>

      {/* Media area */}
      <div
        className="flex-1 flex items-center justify-center p-4 md:p-8 relative min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {hasPrev && (
          <button
            onClick={() => onNavigate(-1)}
            aria-label="Création précédente"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-paper hover:bg-accent hover:border-accent transition-colors items-center justify-center z-10"
          >
            ←
          </button>
        )}

        {renderMedia()}

        {hasNext && (
          <button
            onClick={() => onNavigate(1)}
            aria-label="Création suivante"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-paper hover:bg-accent hover:border-accent transition-colors items-center justify-center z-10"
          >
            →
          </button>
        )}
      </div>

      {/* Gallery page navigation (only for type: gallery) */}
      {isGallery && (
        <div
          className="px-4 md:px-6 py-3 border-t border-white/10 flex items-center justify-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
            disabled={pageIndex === 0}
            aria-label="Page précédente"
            className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-paper disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:border-accent transition-colors flex items-center justify-center text-sm"
          >
            ◀
          </button>

          <div className="flex items-center gap-1.5 max-w-full overflow-x-auto px-2">
            {item.pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPageIndex(idx)}
                aria-label={`Aller à la page ${idx + 1}`}
                className={`shrink-0 min-w-[28px] h-7 px-2 rounded-full font-mono text-xs transition-all
                  ${idx === pageIndex
                    ? "bg-accent text-white font-bold"
                    : "bg-white/5 text-paper/50 hover:bg-white/15 hover:text-paper"
                  }
                `}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setPageIndex((p) => Math.min(item.pages.length - 1, p + 1))}
            disabled={pageIndex === item.pages.length - 1}
            aria-label="Page suivante"
            className="w-9 h-9 rounded-full bg-white/10 border border-white/20 text-paper disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent hover:border-accent transition-colors flex items-center justify-center text-sm"
          >
            ▶
          </button>
        </div>
      )}

      {/* Bottom info */}
      <div
        className="p-4 md:p-6 border-t border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-paper/80 text-sm leading-relaxed">{item.description}</p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {item.tools.map((t) => (
              <span key={t} className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full bg-white/10 text-paper/70">
                {t}
              </span>
            ))}
            {isGallery && (
              <span className="font-mono text-[0.7rem] px-2.5 py-1 rounded-full bg-accent/20 text-accent">
                Page {pageIndex + 1} / {item.pages.length}
              </span>
            )}
            <span className="font-mono text-[0.7rem] text-paper/50 ml-auto">{item.year}</span>
          </div>

          {/* Mobile creation nav */}
          <div className="flex md:hidden gap-3 mt-4">
            <button
              onClick={() => onNavigate(-1)}
              disabled={!hasPrev}
              className="flex-1 py-3 rounded-full bg-white/10 border border-white/20 text-paper disabled:opacity-30 disabled:cursor-not-allowed text-sm"
            >
              ← Création précédente
            </button>
            <button
              onClick={() => onNavigate(1)}
              disabled={!hasNext}
              className="flex-1 py-3 rounded-full bg-white/10 border border-white/20 text-paper disabled:opacity-30 disabled:cursor-not-allowed text-sm"
            >
              Suivante →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
