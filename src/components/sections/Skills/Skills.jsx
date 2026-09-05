import { skills } from '../../../data/skills';

export default function Skills() {
  const marqueeSkills = [...skills, ...skills];

  return (
    <section className="toolkit cinematic-section" id="skills" aria-labelledby="toolkit-title">
		<h2 className="sr-only" id="toolkit-title">Technical skills and software engineering expertise</h2>
		<div className="marquee" aria-hidden="true">
			<div className="marquee-track">
			{marqueeSkills.map((skill, index) => (
				<span className="marquee-item" key={`${skill.id}-${index}`}>{skill.name} <i>✦</i></span>
			))}
			</div>
		</div>
    </section>
  );
}
