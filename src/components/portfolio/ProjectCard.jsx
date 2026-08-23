import { motion, useReducedMotion } from 'framer-motion';
import arrowUpRight from '../../assets/icons/arrow-up-right.svg';

export default function ProjectCard({ eyebrow, title, description, status }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className="project-card"
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    >
      <div className="project-card-top">
        <span className="eyebrow">{eyebrow}</span>
        <span className="project-status">{status}</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-orbit" aria-hidden="true"><span /><span /><span /></div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card-bottom">
        <span>Details on request</span>
        <img src={arrowUpRight} alt="" />
      </div>
    </motion.article>
  );
}
