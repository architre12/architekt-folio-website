import { testimonials } from '../../../data/testimonials';
import { testimonialContent } from '../../../data/portfolio';
import Reveal from '../../motion/Reveal';

export default function Testimonials() {
  return (
    <section className="quote-section cinematic-section" id="testimonials" aria-labelledby="words-title">
      <div className="quote-grid section-shell">
        <Reveal className="testimonial-heading">
          <h2 id="words-title">{testimonialContent.title} <span>{testimonialContent.accentTitle}</span></h2>
        </Reveal>
        <div className="quote-stack">
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
