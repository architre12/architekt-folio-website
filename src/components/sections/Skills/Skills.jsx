import { skills } from '../../../data/skills';
import { toolkitContent } from '../../../data/portfolio';
import Reveal from '../../motion/Reveal';

export default function Skills() {
  const marqueeSkills = [...skills, ...skills];

  return (
    <section className="toolkit cinematic-section" aria-labelledby="toolkit-title">
      <Reveal className="toolkit-heading section-shell">
        <div>
          <div className="section-label"><span>{toolkitContent.section.index}</span>{toolkitContent.section.label}</div>
          <p id="toolkit-title" className="eyebrow toolkit-label">{toolkitContent.title}</p>
        </div>
        <p>{toolkitContent.description[0]}<br />{toolkitContent.description[1]}</p>
      </Reveal>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marqueeSkills.map((skill, index) => (
            <span className="marquee-item" key={`${skill.id}-${index}`}>{skill.name} <i>✦</i></span>
          ))}
        </div>
      </div>
      <div className="skill-grid section-shell">
        {skills.slice(0, 6).map((skill, index) => (
          <Reveal className="skill-chip" delay={index * 0.055} key={skill.id}>
            <span>{String(skill.id).padStart(2, '0')}</span><p>{skill.name}</p><small>{skill.level}</small>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
