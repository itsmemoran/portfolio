export default function ProjectCard({ project }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-surface rounded-2xl overflow-hidden border border-divider transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-transparent group"
    >
      {/* Colored header */}
      <div
        className="h-44 flex items-end p-6 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}
      >
        <span className="absolute -top-3 right-4 font-display text-8xl text-white/[0.12] leading-none pointer-events-none">
          {project.num}
        </span>
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 3).map((t) => (
            <span key={t} className="font-mono text-[0.65rem] px-2 py-0.5 rounded-full bg-white/20 text-white">
              {t}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded-full bg-white/20 text-white">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-xl mb-2.5">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-3">{project.summary}</p>
        <span className="inline-flex items-center gap-1.5 mt-4 text-accent text-sm font-semibold transition-all group-hover:gap-3">
          Visiter le site <span>↗</span>
        </span>
      </div>
    </a>
  );
}
