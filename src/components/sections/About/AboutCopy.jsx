import { Box, Grid, Stack, Typography } from '@mui/material';
import { Divider, SectionHeading } from '../../common';

const AboutCopy = () => {
	return (
		<>
			<SectionHeading title="About Me" shadowText="ABOUT" />
			<Divider size='sm' />
			<Box>
				<Typography variant="body" fontSize={{ xs: '2rem', lg: '1rem' }} gutterBottom>
					I'm a software developer with experience in designing, developing, and deploying scalable and secure applications.
					I love bridging the gap between backend logic and user experience, and I thrive where code meets strategy.
				</Typography>
			</Box>
			<Box sx={{ my: 3}}>
				<Typography variant="body" fontSize={{ xs: '2rem', lg: '1rem' }} gutterBottom>
					I currently work at Morningstar as a Software Engineer, where I contribute to building robust financial software solutions.
					My expertise lies in full-stack development and cloud computing.
				</Typography>
			</Box>
			<Box sx={{ my: 3}}>
				<Typography variant="body" fontSize={{ xs: '2rem', lg: '1rem' }} gutterBottom>
					When I'm not in front of my laptop, you'll usually find me exploring cafes, watching thriller movies, 
					or with my PlayStation 5.
				</Typography>
			</Box>
			<Box sx={{ my: { xs: 14, lg: 6}}}>
				<Stack direction="row">
					<Box sx={{ mr: {xs: 14, lg: 8} }}>
						<Grid container spacing={3}>
							<Grid size={{ xs: 6, lg: 5 }}><Typography variant="h2" color='primary' fontSize={{ xs: '5rem', lg: '4rem'}}>3+</Typography></Grid>
							<Grid size={{ xs: 6, lg: 7 }} sx={{ display: 'flex', alignItems: 'center' }}>
								<Typography variant="bodyBold" color='white' fontSize={{ xs: '2rem', lg: '1rem'}}>Years of <br/>Experience.</Typography>
							</Grid>
						</Grid>
					</Box>
					<Box>
						<Grid container spacing={3}>
							<Grid size={{ xs: 5, lg: 6 }}><Typography variant="h2" color='primary' fontSize={{ xs: '5rem', lg: '4rem'}}>50+</Typography></Grid>
							<Grid size={{ xs: 7, lg: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
								<Typography variant="bodyBold" color='white' fontSize={{ xs: '2rem', lg: '1rem'}}>Production <br/>grade projects.</Typography>
							</Grid>
						</Grid>
					</Box>
				</Stack>
			</Box>
		</>
	)
};

export default AboutCopy;