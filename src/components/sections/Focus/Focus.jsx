import Reveal from '../../motion/Reveal';
import MaskedHeading from '../../motion/MaskedHeading';
import { capabilities, focusContent } from '../../../data/portfolio';

export default function Focus() {
  return (
    <section className="capabilities section-shell cinematic-section" id="focus" aria-labelledby="focus-title">
      <div className="section-lightband" aria-hidden="true" />
      <Reveal><div className="section-label"><span>{focusContent.section.index}</span>{focusContent.section.label}</div></Reveal>
      <Reveal className="capability-head">
        <p className="eyebrow">{focusContent.eyebrow}</p>
        <MaskedHeading id="focus-title" lines={focusContent.titleLines} />
      </Reveal>
      <div className="capability-list">
        {capabilities.map((capability, index) => (
          <Reveal as="article" className="capability" delay={index * 0.08} key={capability.number}>
            <span className="capability-number">{capability.number}</span>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
            <span className="capability-arrow" aria-hidden="true">↗</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
