
import { Box, Typography } from '@mui/material';
import Layout from '../../layout/Layout';

const Footer = () => {
	return (
		<footer>
			<Layout py={8}>
				<Box sx={{ px: 10, textAlign: 'center' }}>
					<Typography fontSize={{ xs: '2rem', lg: '1rem' }} variant="body" color="secondary" component='span'>
						<Typography fontSize={{ xs: '2rem', lg: '1rem' }} variant='bodyBold' component='span' sx={{ display: 'inline' }} color='white'>Thanks for scrolling</Typography>, that's all folks.
					</Typography>
				</Box>
			</Layout>
		</footer>
	)
};

export default Footer;