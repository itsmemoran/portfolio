import SectionWrapper from "../layout/SectionWrapper";
import CaseStudyBlock from "../ui/CaseStudyBlock";
import caseStudies from "../../data/caseStudies";

export default function CaseStudies() {
  return (
    <SectionWrapper
      id="cases"
      number="04"
      label="Études de cas"
      title="Challenges & Solutions"
      subtitle="Zoom sur deux projets clés avec les problématiques rencontrées et les solutions apportées."
      theme="surface"
    >
      {caseStudies.map((study, i) => (
        <CaseStudyBlock key={i} study={study} isLast={i === caseStudies.length - 1} />
      ))}
    </SectionWrapper>
  );
}
