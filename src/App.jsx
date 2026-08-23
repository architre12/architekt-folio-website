import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import './App.css';

import heroImage from './assets/images/hero-image.png';
import orbit from './assets/icons/orbit.svg';
import arrowUpRight from './assets/icons/arrow-up-right.svg';
import { skills } from './data/skills';
import { testimonials } from './data/testimonials';
import socialLinks from './data/socialLinks';
import useSmoothScroll from './hooks/useSmoothScroll';
import Reveal from './components/motion/Reveal';
import MaskedHeading from './components/motion/MaskedHeading';
import ButtonLink from './components/portfolio/ButtonLink';
import ProjectCard from './components/portfolio/ProjectCard';
import SectionHeading from './components/portfolio/SectionHeading';
import SiteNav from './components/portfolio/SiteNav';

const experience = [
  { period: 'DEC 2024 — NOW', company: 'Morningstar', role: 'Software Engineer', detail: 'Full-time · Hybrid' },
  { period: 'MAY 2023 — NOV 2024', company: 'Sciative Solutions', role: 'Jr. Software Developer', detail: 'Full-time · On-site' },
  { period: 'JUN 2021 — MAY 2023', company: 'Qwings', role: 'Web Developer', detail: 'Internship · Remote' },
];

const capabilities = [
  ['01', 'Product engineering', 'Thoughtful, resilient digital products from the first interaction through to scale.'],
  ['02', 'Full-stack systems', 'Reliable services, considered interfaces, and an API layer that brings them together.'],
  ['03', 'Experience design', 'A sharp eye for the small moments that make complex tools feel remarkably clear.'],
];

const metrics = [
  ['3', '+', 'Years shaping', 'digital products'],
  ['50', '+', 'Production-grade', 'projects delivered'],
  ['∞', '', 'Curiosity for the', 'next hard problem'],
];

function App() {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollY, [0, 900], [0, shouldReduceMotion ? 0 : 72]);
  const orbitY = useTransform(scrollY, [0, 900], [0, shouldReduceMotion ? 0 : -34]);

  useSmoothScroll();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      <SiteNav />

      <motion.main
        id="main-content"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-title">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-vignette" aria-hidden="true" />
          <motion.div className="hero-orbit" style={{ y: orbitY }} aria-hidden="true">
            <motion.img
              src={orbit}
              alt=""
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 90, ease: 'linear', repeat: Infinity }}
            />
          </motion.div>

          <div className="hero-copy">
            <motion.p
              className="eyebrow hero-kicker"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              Independent engineer <span>·</span> Mumbai, India
            </motion.p>
            <MaskedHeading as="h1" className="hero-title" lines={['SOFTWARE', 'ENGINEER']} delay={0.12} />
            <motion.div
              className="hero-footnote"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>Building calm, capable digital products<br />for people who expect more.</p>
              <a className="round-link" href="#about" aria-label="Explore my work">
                <span>SCROLL<br />TO EXPLORE</span><i aria-hidden="true">↓</i>
              </a>
            </motion.div>
          </div>

          <motion.div className="portrait-wrap" style={{ y: portraitY }}>
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-frame portrait-frame-one" aria-hidden="true" />
            <div className="portrait-frame portrait-frame-two" aria-hidden="true" />
            <motion.img
              className="portrait"
              src={heroImage}
              alt="Archit Chitre"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="portrait-caption">ARCHIT CHITRE <span>— 2026</span></p>
          </motion.div>

          <p className="hero-side-label">FULL-STACK DEVELOPMENT <span>／</span> PRODUCT THINKING</p>
          <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
        </section>

        <section className="intro section-shell cinematic-section" id="about" aria-labelledby="about-title">
          <div className="section-glow section-glow-top" aria-hidden="true" />
          <Reveal><div className="section-label"><span>01</span> About</div></Reveal>
          <div className="intro-grid">
            <Reveal className="intro-heading">
              <p className="eyebrow">A few words</p>
              <MaskedHeading id="about-title" lines={['Code with', 'conviction.']} />
            </Reveal>
            <Reveal className="intro-copy" delay={0.12} direction="left">
              <p className="lead">I&apos;m a software engineer with a knack for turning ambitious ideas into focused, reliable experiences.</p>
              <p>I bridge backend logic and user experience with a practical, product-minded approach. Currently at Morningstar, I help build financial software that makes complex information feel more accessible.</p>
              <ButtonLink className="text-link" href="#contact">More about me</ButtonLink>
            </Reveal>
          </div>
          <div className="metrics">
            {metrics.map(([value, suffix, lineOne, lineTwo], index) => (
              <Reveal as="div" delay={index * 0.08} key={value}>
                <strong>{value}<span>{suffix}</span></strong>
                <p>{lineOne}<br />{lineTwo}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="capabilities section-shell cinematic-section" id="focus" aria-labelledby="focus-title">
          <div className="section-lightband" aria-hidden="true" />
          <Reveal><div className="section-label"><span>02</span> Focus</div></Reveal>
          <Reveal className="capability-head">
            <p className="eyebrow">What I bring</p>
            <MaskedHeading id="focus-title" lines={['From complex', 'to considered.']} />
          </Reveal>
          <div className="capability-list">
            {capabilities.map(([number, title, description], index) => (
              <Reveal as="article" className="capability" delay={index * 0.08} key={number}>
                <span className="capability-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="capability-arrow" aria-hidden="true">↗</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="toolkit cinematic-section" aria-labelledby="toolkit-title">
          <Reveal className="toolkit-heading section-shell">
            <div>
              <div className="section-label"><span>03</span> Toolkit</div>
              <p id="toolkit-title" className="eyebrow toolkit-label">The moving parts</p>
            </div>
            <p>Selected tools that help ship work<br />with quality and momentum.</p>
          </Reveal>
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...skills, ...skills].map((skill, index) => <span className="marquee-item" key={`${skill.id}-${index}`}>{skill.name} <i>✦</i></span>)}
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

        <section className="experience section-shell cinematic-section" id="experience" aria-labelledby="experience-title">
          <SectionHeading index="04" label="Career" eyebrow="The journey so far" lines={['Work with', 'real impact.']} />
          <Reveal className="experience-copy" direction="left">
            <p>I care about the underlying systems as much as the surface-level polish: both have to work beautifully.</p>
          </Reveal>
          <div className="experience-list">
            {experience.map((item, index) => (
              <Reveal as="article" className="experience-item" delay={index * 0.08} key={item.company}>
                <time>{item.period}</time><h3>{item.company}</h3><p>{item.role}</p><span>{item.detail}</span><img src={arrowUpRight} alt="" />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="archive section-shell cinematic-section" aria-labelledby="archive-title">
          <Reveal><div className="section-label"><span>05</span> Project archive</div></Reveal>
          <div className="archive-layout">
            <Reveal className="archive-intro">
              <p className="eyebrow">Selected work</p>
              <MaskedHeading id="archive-title" lines={['The story is', 'still unfolding.']} />
              <p>Detailed case studies are being prepared. In the meantime, I&apos;m happy to share relevant work and the thinking behind it in conversation.</p>
            </Reveal>
            <Reveal direction="left" delay={0.12}>
              <ProjectCard
                eyebrow="Archive entry 01"
                title="Case studies"
                description="A considered look at the systems, decisions, and outcomes behind selected product work."
                status="In progress"
              />
            </Reveal>
          </div>
        </section>

        <section className="quote-section cinematic-section" aria-labelledby="words-title">
          <div className="quote-grid section-shell">
            <Reveal><div className="section-label"><span>06</span> In their words</div></Reveal>
            <div className="quote-stack">
              <h2 className="sr-only" id="words-title">Testimonials</h2>
              {testimonials.map((testimonial, index) => (
                <Reveal as="figure" className={`testimonial testimonial-${index + 1}`} delay={index * 0.12} key={testimonial.id}>
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <blockquote>{testimonial.content}</blockquote>
                  <figcaption><strong>{testimonial.name}</strong><span>{testimonial.position}, {testimonial.company}</span></figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <footer className="site-footer cinematic-section" id="contact">
          <Reveal className="footer-top section-shell">
            <div>
              <p className="eyebrow">Have a good problem?</p>
              <MaskedHeading lines={["Let's make it", 'matter.']} />
            </div>
            <ButtonLink className="email-link" href="mailto:architchitre@gmail.com">architchitre<br />@gmail.com</ButtonLink>
          </Reveal>
          <div className="footer-bottom section-shell">
            <p>© {new Date().getFullYear()} Archit Chitre</p>
            <div className="social-links">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>
            <a className="back-top" href="#top">Back to top ↑</a>
          </div>
        </footer>
      </motion.main>
    </>
  );
}

export default App;
