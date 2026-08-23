import { motion, useReducedMotion } from 'framer-motion';

export default function MaskedHeading({ lines, className = '', as = 'h2', delay = 0, eager = false, id }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionHeading = motion[as];

  return (
    <MotionHeading className={className} id={id} aria-label={lines.join(' ')}>
      {lines.map((line, index) => (
        <span className="heading-line" key={`${line}-${index}`}>
          <motion.span
            initial={shouldReduceMotion ? false : { y: '112%' }}
            animate={eager && !shouldReduceMotion ? { y: 0 } : undefined}
            whileInView={!eager && !shouldReduceMotion ? { y: 0 } : undefined}
            viewport={!eager ? { once: true, amount: 0.4 } : undefined}
            transition={{ duration: 0.9, delay: delay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionHeading>
  );
}
