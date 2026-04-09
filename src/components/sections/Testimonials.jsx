import SectionWrapper from "../layout/SectionWrapper";
import RevealOnScroll from "../../shared/RevealOnScroll";
import TestimonialCard from "../ui/TestimonialCard";
import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <SectionWrapper
      id="testimonials"
      number="05"
      label="Témoignages"
      title="Ce qu'on dit de moi"
      subtitle="Retours de collaborateurs et clients sur mes réalisations."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <RevealOnScroll key={i} delay={i * 0.1}>
            <TestimonialCard testimonial={t} />
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
