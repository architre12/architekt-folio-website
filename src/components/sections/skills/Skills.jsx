import { Box, Grid, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import theme from '../../../theme/theme';
import Layout from '../../layout/Layout';
import { skills } from '../../../data/skills';

import '@splidejs/react-splide/css';
import '../../../styles/splide.css';

const SkillCard = ({ skill }) => {
	return (
		<Box 
			sx={{ 
				width: '15rem', 
				height: '15rem', 
				backgroundColor: 'background.card',
				padding: 3,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				textAlign: 'left',
				transition: 'all 0.3s ease',
				'&:hover': {
					transform: 'translateY(-4px)',
					backgroundColor: 'background.cardHover',
					boxShadow: `0 8px 25px ${theme.palette.primary.main}20`,
					color: 'text.white'
				}
			}}
		>
			<Grid container spacing={1}>
				<Grid size={4}>Icon</Grid>
				<Grid size={8}>
					<Box xs={{ textAlign: 'left' }}>
						<Typography variant="h5" sx={{ fontSize: '1.2rem' }}>Amazon Web Services</Typography>
						<Typography variant="body">Intermediate</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

const Skills = () => {
	const splideOptions = {
		type: 'loop',
		perPage: 4,
		perMove: 1,
		gap: '1.2rem',
		autoplay: true,
		interval: 4000,
		pauseOnHover: true,
		arrows: false,
		pagination: false,
		breakpoints: {
			1200: {
				perPage: 4,
			},
			900: {
				perPage: 3,
			},
			600: {
				perPage: 2,
			},
			400: {
				perPage: 1,
			},
		},
	};

	return (
		<Layout py={14}>
			<Box sx={{ px: 10, position: 'relative', top: '-15rem' }}>
				<Splide options={splideOptions}>
					{skills.map((skill) => (
						<SplideSlide key={skill.id}>
							<Box sx={{ display: 'flex', justifyContent: 'center' }}>
								<SkillCard skill={skill} />
							</Box>
						</SplideSlide>
					))}
				</Splide>
			</Box>
		</Layout>
	);
};

export default Skills;