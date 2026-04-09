import { useState, useEffect } from "react";

const SECTIONS = ["about", "skills", "projects", "cases", "testimonials", "experience", "contact"];

export default function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handler = () => {
      const offsets = SECTIONS.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean);
      if (!offsets.length) return;
      const current = offsets.reduce((a, b) =>
        Math.abs(b.top - 140) < Math.abs(a.top - 140) ? b : a
      );
      setActive(current.id);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}
