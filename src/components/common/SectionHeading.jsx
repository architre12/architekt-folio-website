import { Box, Typography } from '@mui/material';

const SectionHeading = ({ title, subtitle, shadowText, centered = false }) => {
	return (
		<Box sx={{ 
			textAlign: centered ? 'center' : 'left',
			mb: 4
		}}>
			{shadowText && (
				<Box sx={{ mt: -16, position: 'static'}}>
					<span
						style={{
							position: 'relative',
							bottom: '-75px',
							fontSize: '6.5rem',
							lineHeight: 1,
							opacity: '0.05',
							fontWeight: 900,
						}}
					>
						{shadowText}
					</span>
					<Typography sx={{ position: 'relative' }} variant="h2" gutterBottom>
						{title}
					</Typography>
				</Box>
			)}
			
			{!shadowText && (
				<Typography variant="h2" gutterBottom sx={{ color: 'text.primary' }}>
					{title}
				</Typography>
			)}
			
			{subtitle && (
				<Typography 
					variant="body1" 
					sx={{ 
						color: 'text.secondary',
						maxWidth: centered ? '600px' : 'none',
						mx: centered ? 'auto' : 0,
						mt: 2
					}}
				>
					{subtitle}
				</Typography>
			)}
		</Box>
	);
};

export default SectionHeading;