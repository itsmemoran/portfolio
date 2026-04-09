import SectionWrapper from "../layout/SectionWrapper";
import RevealOnScroll from "../../shared/RevealOnScroll";
import SkillBadge from "../ui/SkillBadge";
import skills, { qualities } from "../../data/skills";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      number="02"
      label="Compétences"
      title="Technologies & savoir-faire"
      subtitle="Les outils que je maîtrise au quotidien pour construire des applications complètes."
      theme="dark"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-5">
        {skills.map((cat, i) => (
          <RevealOnScroll key={cat.title} delay={i * 0.1}>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <SkillBadge key={s} name={s} />
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.4}>
        <div className="mt-14 pt-10 border-t border-white/10 flex gap-10 flex-wrap">
          {qualities.map((q) => (
            <span key={q} className="flex items-center gap-2 text-sm text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-accent2 shrink-0" />
              {q}
            </span>
          ))}
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
