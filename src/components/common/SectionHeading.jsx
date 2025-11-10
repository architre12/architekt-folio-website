import { Box, Typography } from '@mui/material';

const SectionHeading = ({ title, shadowText }) => {
	return (
		<>
			
		
		<Box sx={{ mt: -16, position: 'static'}}>
			<span
				style={{
					position: 'relative',
					bottom: '-75px',
					fontSize: '6.5rem',
					lineHeight: 1,
					// letterSpacing: '0.3rem',
					opacity: '0.05',
					fontWeight: 900,
					// zIndex: '-1',
				}}
			>
				{shadowText}
			</span>
			<Typography sx={{ position: 'relative' }} variant="h2" gutterBottom>{title}</Typography>
		</Box>
		</>
	);
};

export default SectionHeading;