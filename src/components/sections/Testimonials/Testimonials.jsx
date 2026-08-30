import { testimonials } from '../../../data/testimonials';
import { testimonialContent } from '../../../data/portfolio';
import Reveal from '../../motion/Reveal';

export default function Testimonials() {
  return (
    <section className="quote-section cinematic-section" aria-labelledby="words-title">
      <div className="quote-grid section-shell">
        <Reveal>
          <div className="section-label"><span>{testimonialContent.section.index}</span>{testimonialContent.section.label}</div>
        </Reveal>
        <div className="quote-stack">
          <h2 className="sr-only" id="words-title">{testimonialContent.heading}</h2>
          {testimonials.map((testimonial, index) => (
            <Reveal as="figure" className={`testimonial testimonial-${index + 1}`} delay={index * 0.12} key={testimonial.id}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{testimonial.content}</blockquote>
              <figcaption><strong>{testimonial.name}</strong><span>{testimonial.position}, {testimonial.company}</span></figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
