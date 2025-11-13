import { Typography } from '@mui/material';

const HeroCopy = () => {
  return (
	<>
		{/* <Typography variant='h6' color="primary" gutterBottom>Hi, there!</Typography> */}
		<Typography
			variant="h1"
			gutterBottom
			sx={{
				fontSize: { xs: '12rem', lg: '5.5rem' },
				'& span': {
					color: theme => theme.palette.primary.main,
				},
				lineHeight: 0.95,
			}}
		>
			I'm <span>Archit</span> <br /> Chitre.
		</Typography>
	</>
  );
};

export default HeroCopy;