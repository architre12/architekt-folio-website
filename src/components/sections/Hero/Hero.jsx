import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../../../assets/images/hero-image.png';
import heroPattern from '../../../assets/icons/hero-pattern.svg';
import { SocialLinks } from '../../common';
import MaskedHeading from '../../motion/MaskedHeading';
import { heroContent } from '../../../data/portfolio';
import { CaretDownIcon } from "@phosphor-icons/react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 900], [0, shouldReduceMotion ? 0 : 72]);
  const heroScale = useTransform(scrollY, [0, 620], [1, shouldReduceMotion ? 1 : 0.9]);
  const heroOpacity = useTransform(scrollY, [0, 260, 560], [1, shouldReduceMotion ? 1 : 0.4, shouldReduceMotion ? 1 : 0]);
  const heroY = useTransform(scrollY, [0, 620], [0, shouldReduceMotion ? 0 : -32]);

  return (
    <div className="hero-scroll">
    <motion.section className="hero" id="top" aria-labelledby="hero-title" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <motion.img
        className="hero-pattern"
        src={heroPattern}
        alt=""
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94, y: 26 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.35, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="hero-copy">
        <motion.p
          className="eyebrow hero-kicker"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          {heroContent.kicker.role} <span> | </span> {heroContent.kicker.location}
        </motion.p>
        <MaskedHeading as="h1" className="hero-title" id="hero-title" lines={heroContent.titleLines} delay={0.12} />
      </div>

      <div className="hero-actions" aria-label="Contact Archit">
        <SocialLinks className="hero-socials" />
      </div>

      <motion.div className="portrait-wrap" style={{ y: portraitY }}>
        <div className="portrait-halo" aria-hidden="true" />
        <motion.img
          className="portrait"
          src={heroImage}
          alt={heroContent.portraitAlt}
          width="896"
          height="1152"
          fetchPriority="high"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <p className="portrait-caption">{heroContent.portraitCaption} <span>— {heroContent.year}</span></p>
      </motion.div>

      <a className="read-more" href="#about" aria-label="Read more about Archit Chitre"><span><CaretDownIcon size={32} /></span></a>
    </motion.section>
    </div>
  );
}
