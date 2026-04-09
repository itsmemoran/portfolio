import SectionWrapper from "../layout/SectionWrapper";
import RevealOnScroll from "../../shared/RevealOnScroll";
import ExperienceCard from "../ui/ExperienceCard";
import experiences from "../../data/experiences";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      number="06"
      label="Parcours"
      title="Expérience & Formation"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <ExperienceCard experience={exp} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
