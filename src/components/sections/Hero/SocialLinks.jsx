import { IconButton, Stack } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

import socialLinks from '../../../data/socialLinks';

const SocialLinks = () => {

	return(
		<Stack direction="row" spacing={1}>
			<IconButton size="large" aria-label="linkedin" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
				<LinkedInIcon sx={{ fontSize: {xs: '4rem', lg: '2.2rem'} }} />
			</IconButton>
			<IconButton size="large" aria-label="github" href={socialLinks.github} target="_blank" rel="noopener noreferrer">
				<GitHubIcon sx={{ fontSize: {xs: '4rem', lg: '2.2rem'} }} />
			</IconButton>
			<IconButton size="large" aria-label="facebook" href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
				<FacebookIcon sx={{ fontSize: {xs: '4rem', lg: '2.2rem'} }} />
			</IconButton>
			<IconButton size="large" aria-label="instagram" href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
				<InstagramIcon sx={{ fontSize: {xs: '4rem', lg: '2.2rem'} }} />
			</IconButton>
		</Stack>
	)
};

export default SocialLinks;