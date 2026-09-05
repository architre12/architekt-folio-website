import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import logo from '../../assets/images/logo.png';
import { navigationItems } from '../../data/portfolio';

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#about');
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 24);

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  useEffect(() => {
    if (!isOpen || !window.matchMedia('(max-width: 780px)').matches) return undefined;

    document.documentElement.classList.add('mobile-menu-open');
    return () => document.documentElement.classList.remove('mobile-menu-open');
  }, [isOpen]);

  useEffect(() => {
    const sectionElements = navigationItems
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
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}${isOpen ? ' is-menu-open' : ''}`}>
      <a className="wordmark" href="#top" aria-label="Archit Chitre, back to top">
        <img src={logo} alt="" width="601" height="415" />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a className={activeHref === item.href ? 'is-active' : ''} href={item.href} key={item.href} aria-current={activeHref === item.href ? 'location' : undefined}>{item.label}</a>
        ))}
      </nav>

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
              {navigationItems.map((item, index) => (
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
