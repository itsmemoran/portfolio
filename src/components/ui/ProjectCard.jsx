import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Project card with subtle parallax on the colored header.
 * The gradient moves slightly slower than the card scrolls,
 * creating a "window into color" feeling.
 */
export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // The header gradient shifts vertically
  const headerY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <a
      ref={ref}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-surface rounded-2xl overflow-hidden border border-divider transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-transparent group"
    >
      {/* Colored header with parallax */}
      <div className="h-44 relative overflow-hidden">
        <motion.div
          className="absolute inset-[-20px] flex items-end p-6"
          style={{
            background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
            y: headerY,
          }}
        >
          <span className="absolute -top-3 right-4 font-display text-8xl text-white/[0.12] leading-none pointer-events-none">
            {project.num}
          </span>
        </motion.div>

        {/* Tags — positioned separately so they don't shift */}
        <div className="absolute bottom-4 left-6 flex flex-wrap gap-1 z-[1]">
          {project.stack.slice(0, 3).map((t) => (
            <span key={t} className="font-mono text-[0.65rem] px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
              {t}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
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
