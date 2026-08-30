import { motion, useReducedMotion, useScroll } from 'framer-motion';
import './App.css';

import useSmoothScroll from './hooks/useSmoothScroll';
import SiteNav from './components/portfolio/SiteNav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Testimonials } from './components/sections/Testimonials';
import { Footer } from './components/sections/Footer';

function App() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

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
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Footer />
      </motion.main>
    </>
  );
}

export default App;
