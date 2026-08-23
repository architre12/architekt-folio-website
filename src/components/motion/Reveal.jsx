import { motion, useReducedMotion } from 'framer-motion';

const offsets = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  scale: { x: 0, y: 0, scale: 0.94 },
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as = 'div',
}) {
  const shouldReduceMotion = useReducedMotion();
  const offset = offsets[direction] || offsets.up;
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, ...offset }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.82, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionComponent>
  );
}
