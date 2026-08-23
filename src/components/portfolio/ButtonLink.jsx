import { motion } from 'framer-motion';

export default function ButtonLink({ href, children, className = '', ariaLabel, target, rel }) {
  return (
    <motion.a
      className={`button-link ${className}`.trim()}
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 360, damping: 24 }}
    >
      <span>{children}</span>
      <i aria-hidden="true">↗</i>
    </motion.a>
  );
}
