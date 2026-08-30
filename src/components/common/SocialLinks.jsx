import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { socialProfiles } from '../../data/socialLinks';

const socialIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
};

export default function SocialLinks({ className = '' }) {
  return (
    <div className={className}>
      {socialProfiles.map(({ label, href, icon }) => {
        const Icon = socialIcons[icon];

        return (
          <a
            className="social-icon-link"
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${label} (opens in a new tab)`}
            key={label}
          >
            <Icon fontSize="inherit" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
