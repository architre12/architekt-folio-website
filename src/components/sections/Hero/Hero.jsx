import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Divider } from '../../common';
import HeroCopy from './HeroCopy';
import SocialLinks from './SocialLinks';

import heroImage from '../../../assets/images/hero-image.png';

const Hero = () => {
	return (
		<Box sx={{ height: '100%', minHeight: '100vh' }}>
				<Grid container spacing={4} sx={{ height: '100%', minHeight: '100vh' }}>
					<Grid
						size={{ xs: 12, md: 8 }}
						sx={{
							height: '100%',
							minHeight: '100vh',
							backgroundImage: `url(${heroImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '100% 0',
							backgroundSize: 'contain',
						}}
					>
						<Box sx={{ mt: 14, px: 8, pt: 20 }}>
							<HeroCopy />
							<Divider />
						</Box>
						<Box sx={{ px: 8, mt: 4 }}>
							<SocialLinks />
						</Box>
					</Grid>
					<Grid size={{ xs: 12, md: 4 }}>
						<Box sx={{ mt: 20, px: 6 }}>
							<Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
								Software Engineer and Developer, based in Mumbai
							</Typography>
							<Typography sx={{ mt: 6 }} variant="body" color='secondary' gutterBottom>
								I am a passionate software engineer with experience in building web applications using modern technologies. I love to create efficient and scalable solutions that solve real-world problems.
							</Typography>
						</Box>
						<Box sx={{ mt: 4, px: 6 }}>
							<Button variant="text" color="primary" endIcon={<ArrowForwardIcon />}>Contact Me</Button>
						</Box>
					</Grid>
				</Grid>
		</Box>
	);
};

export default Hero;
