import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "../../shared/RevealOnScroll";
import ContactCard from "../ui/ContactCard";
import contactLinks from "../../data/contactLinks";

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const numY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="contact" className="py-20 md:py-28 bg-ink text-paper overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <div className="relative mb-14">
            <motion.span
              aria-hidden="true"
              className="absolute -top-6 right-0 font-display text-[clamp(5rem,10vw,9rem)] leading-none text-paper opacity-[0.04] select-none pointer-events-none"
              style={{ y: numY }}
            >
              08
            </motion.span>
            <p className="font-mono text-xs text-accent tracking-[0.12em] uppercase mb-2 font-medium">
              Contact
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight">
              Travaillons ensemble.
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-lg leading-relaxed">
              Ouvert aux opportunités CDI, freelance ou collaboration projet. Je
              réponds sous 24h.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-4 max-w-[700px]">
          {contactLinks.map((link, i) => (
            <RevealOnScroll key={link.label} delay={i * 0.08}>
              <ContactCard link={link} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
