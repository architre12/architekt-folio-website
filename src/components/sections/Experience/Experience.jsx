import { experience, experienceContent } from '../../../data/portfolio';
import Reveal from '../../motion/Reveal';
import SectionHeading from '../../portfolio/SectionHeading';
import Timeline from './Timeline';

export default function Experience() {
  return (
    <section className="experience section-shell cinematic-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        index={experienceContent.section.index}
        label={experienceContent.section.label}
        id={experienceContent.headingId}
        eyebrow={experienceContent.eyebrow}
        lines={experienceContent.titleLines}
      />
      <Reveal className="experience-copy" direction="left">
        <p>{experienceContent.description}</p>
      </Reveal>
      <Timeline entries={experience} />
    </section>
  );
}
