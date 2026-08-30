import Reveal from '../../motion/Reveal';
import MaskedHeading from '../../motion/MaskedHeading';
import ButtonLink from '../../portfolio/ButtonLink';
import { aboutContent, metrics } from '../../../data/portfolio';

export default function About() {
  return (
    <section className="intro section-shell cinematic-section" id="about" aria-labelledby="about-title">
      <div className="section-glow section-glow-top" aria-hidden="true" />
      <Reveal><div className="section-label"><span>{aboutContent.section.index}</span>{aboutContent.section.label}</div></Reveal>
      <div className="intro-grid">
        <Reveal className="intro-heading">
          <p className="eyebrow">{aboutContent.eyebrow}</p>
          <MaskedHeading id="about-title" lines={aboutContent.titleLines} />
        </Reveal>
        <Reveal className="intro-copy" delay={0.12} direction="left">
          <p className="lead">{aboutContent.lead}</p>
          <p>{aboutContent.body}</p>
          <ButtonLink className="text-link" href="#contact">{aboutContent.actionLabel}</ButtonLink>
        </Reveal>
      </div>
      <div className="metrics">
        {metrics.map((metric, index) => (
          <Reveal as="div" delay={index * 0.08} key={metric.value}>
            <strong>{metric.value}<span>{metric.suffix}</span></strong>
            <p>{metric.lines[0]}<br />{metric.lines[1]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
