import { useState } from "react";
import useActiveSection from "../../shared/useActiveSection";

const NAV_ITEMS = [
  { id: "about", label: "Profil" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "cases", label: "Études de cas" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-xl border-b border-divider">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo("about")} className="flex items-center gap-2 bg-transparent border-none">
          <span className="font-display text-xl">Moran</span>
          <span className="w-6 h-0.5 bg-accent block" />
          <span className="font-display text-xl">Fofana</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative bg-transparent border-none text-xs font-semibold tracking-wider uppercase transition-colors pb-1
                ${active === item.id ? "text-ink" : "text-muted hover:text-ink"}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300
                ${active === item.id ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-ink transition-transform ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-transform ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-6 pt-4 border-t border-divider animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`bg-transparent border-none text-left text-base font-semibold py-2
                ${active === item.id ? "text-accent" : "text-ink"}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
