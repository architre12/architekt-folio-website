import arrowUpRight from '../../../assets/icons/arrow-up-right.svg';
import Reveal from '../../motion/Reveal';

export default function Timeline({ entries }) {
  return (
    <div className="experience-timeline" aria-label="Career timeline">
      {entries.map((entry, index) => {
        const isLeft = index % 2 === 0;

        return (
          <Reveal
            as="article"
            className={`timeline-entry timeline-entry--${isLeft ? 'left' : 'right'}`}
            delay={index * 0.1}
            direction={isLeft ? 'right' : 'left'}
            key={entry.company}
          >
            <div className="timeline-card">
              <div className="timeline-card-top"><time>{entry.period}</time><span>0{index + 1}</span></div>
              <h3>{entry.company}</h3>
              <p>{entry.role}</p>
              <div className="timeline-card-bottom"><span>{entry.detail}</span><img src={arrowUpRight} alt="" /></div>
            </div>
            <span className="timeline-node" aria-hidden="true"><i /></span>
          </Reveal>
        );
      })}
    </div>
  );
}
