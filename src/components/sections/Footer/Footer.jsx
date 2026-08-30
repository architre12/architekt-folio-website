import { EnvelopeSimpleIcon, PhoneIcon } from '@phosphor-icons/react';
import { SocialLinks } from '../../common';
import Reveal from '../../motion/Reveal';
import MaskedHeading from '../../motion/MaskedHeading';
import { footerContent, siteContact } from '../../../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer cinematic-section" id="contact">
      <Reveal className="footer-top section-shell">
        <div>
          <MaskedHeading lines={footerContent.titleLines} />
        </div>
        <div className="footer-contact" aria-label="Contact details">
          <a className="footer-contact-link" href={`mailto:${siteContact.email}`}>
            <EnvelopeSimpleIcon aria-hidden="true" weight="light" />
            <span>{siteContact.email}</span>
          </a>
          <a className="footer-contact-link" href={siteContact.phoneHref}>
            <PhoneIcon aria-hidden="true" weight="light" />
            <span>{siteContact.phone}</span>
          </a>
        </div>
      </Reveal>
      <div className="footer-bottom section-shell">
        <p>© {new Date().getFullYear()} Archit Chitre</p>
        <SocialLinks className="social-links" />
        <a className="back-top" href="#top">{footerContent.backToTopLabel}</a>
      </div>
    </footer>
  );
}
