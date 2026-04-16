const CATEGORY_STYLES = {
  photoshop: { label: "Photoshop", color: "bg-[#31a8ff]" },
  canva: { label: "Canva", color: "bg-[#00c4cc]" },
  video: { label: "Vidéo", color: "bg-accent" },
};

export default function CreationCard({ item, onClick }) {
  const cat = CATEGORY_STYLES[item.category];
  const isVideo = item.type === "video";
  const isGallery = item.type === "gallery";
  const pageCount = isGallery ? item.pages.length : 0;

  return (
    <button
      onClick={() => onClick(item)}
      className="group relative w-full overflow-hidden rounded-2xl bg-surface border border-divider transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:border-transparent text-left p-0"
      aria-label={`Ouvrir ${item.title}`}
    >
      <div className={`relative w-full overflow-hidden ${isVideo ? "aspect-video" : "aspect-[4/5]"}`}>
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category badge */}
        <span className={`absolute top-3 left-3 ${cat.color} text-white text-[0.65rem] font-mono font-semibold px-2.5 py-1 rounded-full tracking-wider uppercase`}>
          {cat.label}
        </span>

        {/* Multi-page indicator */}
        {isGallery && (
          <span className="absolute top-3 right-3 bg-ink/80 backdrop-blur-sm text-white text-[0.65rem] font-mono font-semibold px-2.5 py-1 rounded-full tracking-wider flex items-center gap-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="12" height="18" rx="1" />
              <path d="M9 9h12v12H9z" />
            </svg>
            {pageCount} PAGES
          </span>
        )}

        {/* Play icon for videos */}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <span className="text-ink text-xl ml-1">▶</span>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-display text-lg leading-tight">{item.title}</h3>
          <p className="text-white/70 text-xs mt-1 font-mono">
            {item.tools.join(" · ")} · {item.year}
          </p>
        </div>
      </div>
    </button>
  );
}
