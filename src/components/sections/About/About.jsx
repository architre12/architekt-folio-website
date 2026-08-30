import Reveal from '../../motion/Reveal';
import MaskedHeading from '../../motion/MaskedHeading';
import { aboutContent, metrics } from '../../../data/portfolio';

export default function About() {
  return (
    <section className="intro section-shell cinematic-section" id="about" aria-labelledby="about-title">
      <div className="intro-grid">
        <Reveal className="intro-heading">
          <MaskedHeading id="about-title" lines={aboutContent.titleLines} />
        </Reveal>
        <Reveal className="intro-copy" delay={0.12} direction="left">
          <p className="lead">{aboutContent.lead}</p>
          {aboutContent.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
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
