import { experience, experienceContent } from '../../../data/portfolio';
import SectionHeading from '../../portfolio/SectionHeading';
import Timeline from './Timeline';

export default function Experience() {
  return (
    <section className="experience section-shell cinematic-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading
        id={experienceContent.headingId}
        lines={experienceContent.titleLines}
      />
      <Timeline entries={experience} />
    </section>
  );
}
