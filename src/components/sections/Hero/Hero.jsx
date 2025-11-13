import { Box, Grid, Typography } from '@mui/material';
import { Divider } from '../../common';
import HeroCopy from './HeroCopy';
import SocialLinks from './SocialLinks';

import heroImage from '../../../assets/images/hero-image.png';

const Hero = () => {
	return (
		<Box sx={{ height: '100%', minHeight: { xs: '100vh', md: '100vh' } }}>
			<Grid container spacing={4} sx={{ height: '100%', minHeight: { xs: '100vh', md: '100vh' } }}>
				<Grid
					size={{ xs: 12, lg: 8 }}
					sx={{
						height: '100%',
						minHeight: '100vh',
						backgroundImage: `url(${heroImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: {xs: '30% 50%', lg: '90% 0'},
						backgroundSize: { xs: 'cover', lg: 'contain'},
					}}
				>
					<Box sx={{ mt: { xs: 85, lg: 14}, px: { xs: 18, lg: 30}, pt: 20 }}>
						<HeroCopy />
						<Divider />
					</Box>
					<Box sx={{ mt: 4, px: { xs: 18, lg: 30} }}>
						<SocialLinks />
					</Box>
				</Grid>
				<Grid size={{ xs: 12, lg: 4 }}>
					<Box sx={{ mt: { xs: 0, lg: 20}, pr: {xs: 18, lg: 12}, pl: {xs: 18, lg: 0}, py: { xs: 20, lg: 0} }}>
						<Typography variant="h4" gutterBottom sx={{ mb: 4, fontSize: { xs: '3.2rem', lg: '2rem'} }}>
							Software Engineer and Developer, based in Mumbai
						</Typography>
						<Typography sx={{ mt: 6, fontSize: { xs: '2rem', lg: '1rem'} }} variant="body" color='secondary' gutterBottom>
							I am a passionate software engineer with experience in building web applications using modern technologies. I love to create efficient and scalable solutions that solve real-world problems.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Hero;
