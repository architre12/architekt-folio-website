import Reveal from '../../motion/Reveal';

export default function Timeline({ entries }) {
  return (
    <div className="experience-timeline" aria-label="Career timeline">
      {entries.map((entry, index) => {
        return (
          <Reveal
            as="article"
            className="timeline-entry"
            delay={index * 0.1}
            direction="left"
            key={entry.company}
          >
            <div className="timeline-card">
              <div className="timeline-card-top"><time>{entry.period}</time></div>
              <h3>{entry.company}</h3>
              <p>{entry.role}</p>
            </div>
            <span className="timeline-node" aria-hidden="true"><i /></span>
          </Reveal>
        );
      })}
    </div>
  );
}
