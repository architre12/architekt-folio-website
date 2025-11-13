import { Box, Grid, Stack, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

	return(
		<>
			<Typography fontSize={{ xs: '2.2rem', lg: '1.6rem' }} variant="h5" gutterBottom>Contact Me</Typography>
			<Typography variant="body" color='secondary' gutterBottom sx={{ mt: 4 }} fontSize={{xs: '2rem', lg: '1rem'}}>
				I’m always open to discussing new projects, collaborations, or just exchanging ideas around software design and product development.
			</Typography>
			<Stack sx={{ mt: 4 }}>
				<Box sx={{ py: 2 }}>
					<Grid container spacing={2}>
						<Grid item xs={2}><PhoneAndroidIcon color="primary" fontSize='large'/></Grid>
						<Grid item xs={10}><Typography fontSize={{ xs: '2rem', lg: '1.25rem'}} variant="bodyLarge">(+91) 7506960902</Typography></Grid>
					</Grid>
				</Box>
				<Box sx={{ py: 2 }}>
					<Grid container spacing={2}>
						<Grid item xs={2}><EmailIcon color="primary" fontSize='large'/></Grid>
						<Grid item xs={10}><Typography fontSize={{ xs: '2rem', lg: '1.25rem'}} variant="bodyLarge">architchitre@gmail.com</Typography></Grid>
					</Grid>
				</Box>
				<Box sx={{ py: 2 }}>
					<Grid container spacing={2}>
						<Grid item xs={2}></Grid>
						<Grid item xs={10}></Grid>
					</Grid>
				</Box>
			</Stack>
		</>
	)
};

export default Contact;