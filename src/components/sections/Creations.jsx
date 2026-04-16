import { useState, useMemo } from "react";
import SectionWrapper from "../layout/SectionWrapper";
import RevealOnScroll from "../../shared/RevealOnScroll";
import CreationCard from "../ui/CreationCard";
import CreationLightbox from "../ui/CreationLightbox";
import creations, { categories } from "../../data/creations";

export default function Creations() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtered list (memoized for perf)
  const filtered = useMemo(() => {
    if (activeCategory === "all") return creations;
    return creations.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  // Counts per category for the filter badges
  const counts = useMemo(() => {
    return categories.reduce((acc, cat) => {
      acc[cat.id] =
        cat.id === "all"
          ? creations.length
          : creations.filter((c) => c.category === cat.id).length;
      return acc;
    }, {});
  }, []);

  // Navigation inside the lightbox
  const navigate = (direction) => {
    if (!selectedItem) return;
    const currentIndex = filtered.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < filtered.length) {
      setSelectedItem(filtered[nextIndex]);
    }
  };

  return (
    <SectionWrapper
      id="creations"
      number="05"
      label="Créations visuelles"
      title="Design graphique & vidéo"
      subtitle="En parallèle du développement, je conçois des visuels, retouche des photos et monte des vidéos. Voici une sélection."
      theme="surface"
    >
      {/* Filter tabs */}
      <RevealOnScroll>
        <div className="flex flex-wrap gap-2 mb-10 -mt-2" role="tablist" aria-label="Filtrer par catégorie">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300 border
                  ${isActive
                    ? "bg-ink text-paper border-ink"
                    : "bg-transparent text-muted border-divider hover:border-ink hover:text-ink"
                  }
                `}
              >
                {cat.label}
                <span className={`font-mono text-[0.7rem] px-1.5 py-0.5 rounded-full
                  ${isActive ? "bg-white/20 text-paper" : "bg-ink/5 text-muted"}
                `}>
                  {counts[cat.id]}
                </span>
              </button>
            );
          })}
        </div>
      </RevealOnScroll>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => (
          <RevealOnScroll key={item.id} delay={Math.min(i * 0.05, 0.3)}>
            <CreationCard item={item} onClick={setSelectedItem} />
          </RevealOnScroll>
        ))}
      </div>

      {/* Empty state (should rarely happen) */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted">
          Aucune création dans cette catégorie pour le moment.
        </div>
      )}

      {/* Lightbox */}
      <CreationLightbox
        item={selectedItem}
        items={filtered}
        onClose={() => setSelectedItem(null)}
        onNavigate={navigate}
      />
    </SectionWrapper>
  );
}
