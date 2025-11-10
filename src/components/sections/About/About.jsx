import { Box, Container, Grid } from '@mui/material';
import theme from '../../../theme/theme';

import AboutCopy from './AboutCopy';
import Contact from './Contact';

const About = () => {

	return(
		<Box sx={{ backgroundColor: theme.palette.background.secondary, py: 14 }}>
      		<Container fixed maxWidth="xl">
				<Grid container spacing={4} sx={{ height: '100%' }}>
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={{ px: 8 }}>
							<Contact />
						</Box>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<Box>
							<AboutCopy />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
};

export default About;
