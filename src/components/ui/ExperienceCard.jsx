export default function ExperienceCard({ experience }) {
  return (
    <div className="p-8 rounded-2xl bg-surface border border-divider transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
      <span className={`font-mono text-xs tracking-wider uppercase font-medium ${experience.type === "education" ? "text-accent2" : "text-accent"}`}>
        {experience.period}
      </span>
      <h3 className="text-lg font-bold mt-2 mb-1">{experience.title}</h3>
      <p className="text-muted text-sm mb-4">
        {experience.company} · {experience.location}
      </p>
      <p className="text-sm text-muted leading-relaxed">{experience.description}</p>
    </div>
  );
}
