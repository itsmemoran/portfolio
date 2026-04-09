export default function ContactCard({ link }) {
  const isGreen = link.icon === "◎";
  const content = (
    <>
      <span className={`w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${isGreen ? "bg-accent2/15 text-accent2" : "bg-accent/15 text-accent"}`}>
        {link.icon}
      </span>
      <div>
        <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">{link.label}</p>
        <p className="text-[0.95rem] text-paper mt-0.5">{link.value}</p>
      </div>
    </>
  );

  const cls = "flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/[0.05] border border-white/10 transition-all duration-300";

  if (link.href) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={`${cls} hover:border-accent hover:translate-x-1.5 hover:shadow-[0_4px_20px_rgba(196,99,45,0.1)]`}>
        {content}
      </a>
    );
  }

  return <div className={`${cls} cursor-default`}>{content}</div>;
}
