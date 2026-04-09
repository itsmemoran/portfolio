export default function TestimonialCard({ testimonial }) {
  return (
    <blockquote className="bg-surface rounded-2xl p-8 border border-divider relative transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-transparent">
      <span className="absolute top-4 left-6 font-display text-5xl text-accent/20 leading-none" aria-hidden="true">
        "
      </span>
      <p className="text-[0.95rem] text-ink leading-relaxed italic mt-5 mb-6">
        {testimonial.quote}
      </p>
      <footer className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shrink-0">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-sm text-ink">{testimonial.author}</p>
          <p className="text-xs text-muted mt-0.5">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </footer>
    </blockquote>
  );
}
