const base = "inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border-none cursor-pointer";

const variants = {
  primary: `${base} bg-ink text-paper hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,99,45,0.25)]`,
  ghost: `${base} bg-transparent text-ink border-2 border-divider hover:border-ink hover:-translate-y-0.5`,
};

export default function Button({ variant = "primary", href, onClick, className = "", children }) {
  const cls = `${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={cls} onClick={onClick}>{children}</a>;
  }
  return <button className={cls} onClick={onClick}>{children}</button>;
}
