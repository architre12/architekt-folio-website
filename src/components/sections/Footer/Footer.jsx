import { SocialLinks } from '../../common';
import Reveal from '../../motion/Reveal';
import MaskedHeading from '../../motion/MaskedHeading';
import ButtonLink from '../../portfolio/ButtonLink';
import { footerContent, siteContact } from '../../../data/portfolio';

export default function Footer() {
  const [emailUser, emailDomain] = siteContact.email.split('@');

  return (
    <footer className="site-footer cinematic-section" id="contact">
      <Reveal className="footer-top section-shell">
        <div>
          <p className="eyebrow">{footerContent.eyebrow}</p>
          <MaskedHeading lines={footerContent.titleLines} />
        </div>
        <ButtonLink className="email-link" href={`mailto:${siteContact.email}`}>
          {emailUser}<br />@{emailDomain}
        </ButtonLink>
      </Reveal>
      <div className="footer-bottom section-shell">
        <p>© {new Date().getFullYear()} Archit Chitre</p>
        <SocialLinks className="social-links" />
        <a className="back-top" href="#top">{footerContent.backToTopLabel}</a>
      </div>
    </footer>
  );
}
