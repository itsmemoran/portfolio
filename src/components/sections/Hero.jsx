import RevealOnScroll from "../../shared/RevealOnScroll";
import Button from "../ui/Button";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-28 pb-20 md:pt-32">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <RevealOnScroll>
          <p className="font-mono text-sm text-accent tracking-[0.14em] uppercase mb-5 font-medium">
            Développeur Créatif Full Stack · Abidjan, Côte d'Ivoire
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[1.08] max-w-3xl mb-8">
            Je conçois &<br />
            développe des{" "}
            <span className="text-accent italic">expériences</span> web
            complètes.
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-muted max-w-xl leading-relaxed mb-10">
            Autonome et passionné par l'immersion utilisateur, je m'engage à
            livrer des solutions haute performance et sur mesure. Du wireframe au
            déploiement, chaque décision technique intègre une intention UX.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex gap-4 flex-wrap">
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
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.5}>
          <div className="mt-20 flex items-center gap-5">
            <div className="h-px flex-1 bg-divider" />
            <span className="font-mono text-xs text-muted tracking-widest">
              BACHELOR CIS — IUGB · GRAND-BASSAM
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
