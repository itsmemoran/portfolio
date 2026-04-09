import RevealOnScroll from "../../shared/RevealOnScroll";

export default function CaseStudyBlock({ study, isLast }) {
  return (
    <RevealOnScroll>
      <article className={`py-12 ${isLast ? "" : "border-b border-divider"}`}>
        <h3 className="font-display text-2xl mb-7 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent inline-block shrink-0" />
          {study.project}
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Challenge</h4>
            <p className="text-muted leading-relaxed text-[0.95rem] mb-7">{study.challenge}</p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">Approche</h4>
            <div className="flex flex-col gap-2.5">
              {study.approach.map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="font-mono text-xs font-bold text-accent shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-muted leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-accent2 mb-3">Solution</h4>
            <p className="text-muted leading-relaxed text-[0.95rem] mb-7">{study.solution}</p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-accent2 mb-4">Résultats clés</h4>
            <div className="grid grid-cols-3 gap-3">
              {study.metrics.map((m, i) => (
                <div key={i} className="text-center py-5 px-3 rounded-2xl bg-gradient-to-br from-paper to-surface border border-divider">
                  <p className="font-display text-3xl text-accent mb-1">{m.value}</p>
                  <p className="text-xs text-muted font-medium">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}
