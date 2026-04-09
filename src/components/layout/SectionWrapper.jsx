import RevealOnScroll from "../../shared/RevealOnScroll";

const themes = {
  light: { bg: "bg-paper", text: "text-ink", sub: "text-muted", numColor: "text-accent" },
  dark: { bg: "bg-ink", text: "text-paper", sub: "text-white/50", numColor: "text-paper" },
  surface: { bg: "bg-surface", text: "text-ink", sub: "text-muted", numColor: "text-accent" },
};

export default function SectionWrapper({ id, number, label, title, subtitle, theme = "light", children }) {
  const t = themes[theme];

  return (
    <section id={id} className={`${t.bg} ${t.text} py-20 md:py-28 relative`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <div className="relative mb-14">
            <span
              aria-hidden="true"
              className={`absolute -top-6 right-0 font-display text-[clamp(5rem,10vw,9rem)] leading-none select-none pointer-events-none ${t.numColor} ${theme === "dark" ? "opacity-[0.04]" : "opacity-[0.07]"}`}
            >
              {number}
            </span>
            <p className="font-mono text-xs text-accent tracking-[0.12em] uppercase mb-2 font-medium">
              {label}
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight max-w-xl">
              {title}
            </h2>
            {subtitle && (
              <p className={`mt-4 text-lg max-w-lg leading-relaxed ${t.sub}`}>
                {subtitle}
              </p>
            )}
          </div>
        </RevealOnScroll>
        {children}
      </div>
    </section>
  );
}
