export default function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/[0.08] text-paper border border-white/[0.12] transition-all duration-300 cursor-default hover:bg-accent hover:border-accent hover:-translate-y-0.5">
      {name}
    </span>
  );
}
