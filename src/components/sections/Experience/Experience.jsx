import { Box, Grid, Typography } from '@mui/material';
import Layout from '../../layout/Layout';
import { Divider, SectionHeading } from '../../common';
import Timeline from './Timeline';

const Experience = () => {
	return (
		<Layout 
            width='100%'
			py={8}
			px={12}
        >
			<Grid container spacing={4} sx={{ height: '100%' }}>
				<Grid size={{ xs: 12, lg: 6 }}>
					<SectionHeading title="My Career" shadowText="CAREER" />
					<Divider size='sm' />
					<Box>
						<Typography fontSize={{ xs: '2rem', lg: '1rem' }} variant="body" color='secondary' gutterBottom>
							Along the way, I’ve picked up experience across the stack, led projects end-to-end, 
							and learned how to turn ideas into working products without overcomplicating the process.
						</Typography>
						<Typography fontSize={{ xs: '2rem', lg: '1rem' }} variant="body" color='secondary'>
							In my current role at Morningstar, I focus on building reliable software that supports products used at scale.
							Most of my work revolves around improving digitial experiences of our users and making sure the data that powers our products is accurate and accessible.
						</Typography>
					</Box>
				</Grid>
				<Grid size={{ xs: 12, lg: 6 }}>
					<Timeline />
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Experience;