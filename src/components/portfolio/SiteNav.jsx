import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import monogram from '../../assets/icons/monogram.svg';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Career', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#about');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => ({ ...item, element: document.querySelector(item.href) }))
      .filter((item) => item.element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleSection) setActiveHref(`#${visibleSection.target.id}`);
      },
      { rootMargin: '-18% 0px -65% 0px', threshold: [0, 0.2, 0.5] },
    );

    sectionElements.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Archit Chitre, back to top">
        <img src={monogram} alt="" />
        <span>ARCHIT<br />CHITRE</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a className={activeHref === item.href ? 'is-active' : ''} href={item.href} key={item.href} aria-current={activeHref === item.href ? 'location' : undefined}>{item.label}</a>
        ))}
      </nav>

      <a className="header-cta" href="mailto:architchitre@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>

      <button
        className="menu-button"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <span>{isOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={shouldReduceMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-nav-links">
              {navItems.map((item, index) => (
                <motion.a
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                  aria-current={activeHref === item.href ? 'location' : undefined}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.12 + index * 0.07, duration: 0.42 }}
                >
                  <span>0{index + 1}</span>{item.label}
                </motion.a>
              ))}
            </div>
            <p>Available for selected collaborations<br />and interesting product problems.</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
