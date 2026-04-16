import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroStroke from "../../shared/HeroStroke";
import Button from "../ui/Button";

/**
 * Hero with:
 * 1. Staggered entrance animation on first load (initial → animate)
 * 2. Multi-speed parallax on scroll (each layer at different speed)
 * 3. Fade-out as user scrolls past
 */

const enter = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Layers: higher value = moves away faster (feels closer to viewer)
  const yTag    = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yTitle  = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yBody   = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yCta    = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const yFoot   = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const fadeOut  = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center pt-28 pb-20 md:pt-32 relative overflow-hidden"
    >
      <HeroStroke />

      <motion.div
        className="max-w-[1200px] mx-auto px-6 w-full relative z-[1]"
        style={{ opacity: fadeOut }}
      >
        {/* Tagline — enters first, scrolls fastest */}
        <motion.p
          className="font-mono text-sm text-accent tracking-[0.14em] uppercase mb-5 font-medium"
          style={{ y: yTag }}
          {...enter(0.1)}
        >
          Développeur Créatif Full Stack · Abidjan, Côte d'Ivoire
        </motion.p>

        {/* Title */}
        <motion.h1
          className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[1.08] max-w-3xl mb-8"
          style={{ y: yTitle }}
          {...enter(0.25)}
        >
          Je conçois &<br />
          développe des{" "}
          <span className="text-accent italic">expériences</span> web
          complètes.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg text-muted max-w-xl leading-relaxed mb-10"
          style={{ y: yBody }}
          {...enter(0.4)}
        >
          Autonome et passionné par l'immersion utilisateur, je m'engage à
          livrer des solutions haute performance et sur mesure. Du wireframe au
          déploiement, chaque décision technique intègre une intention UX.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex gap-4 flex-wrap"
          style={{ y: yCta }}
          {...enter(0.55)}
        >
          <Button
            variant="primary"
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo("projects"); }}
          >
            Découvrir mes projets <span className="text-lg">↓</span>
          </Button>
          <Button
            variant="ghost"
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          >
            Me contacter
          </Button>
        </motion.div>

        {/* Footer rule — enters last, barely moves on scroll */}
        <motion.div
          className="mt-20 flex items-center gap-5"
          style={{ y: yFoot }}
          {...enter(0.7)}
        >
          <div className="h-px flex-1 bg-divider" />
          <span className="font-mono text-xs text-muted tracking-widest">
            BACHELOR CIS — IUGB · GRAND-BASSAM
          </span>
          <div className="h-px w-10 bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
