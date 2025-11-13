import { Box, Grid, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import theme from '../../../theme/theme';
import Layout from '../../layout/Layout';
import Icon from '../../common/Icon';
import { skills } from '../../../data/skills';

import '@splidejs/react-splide/css';
import '../../../styles/splide.css';

const SkillCard = ({ skill }) => {
	return (
		<Box 
			sx={{ 
				width: { xs: '20rem', lg: '12rem' }, 
				height: { xs: '20rem', lg: '12rem' }, 
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
				<Grid size={4}>
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Icon 
							name={skill.icon} 
							size={{ xs: 48, lg: 36 }}
						/>
					</Box>
				</Grid>
				<Grid size={8}>
					<Box xs={{ textAlign: 'left' }}>
						<Typography variant="h5" sx={{ fontSize: { xs: '2rem', lg: '1.2rem'}, letterSpacing: '0.05em' }} gutterBottom>
							{skill.name}
						</Typography>
						<Typography variant="small">
							{skill.level}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

const Skills = () => {
	const splideOptions = {
		type: 'loop',
		perPage: 6,
		perMove: 1,
		gap: '1rem',
		autoplay: true,
		interval: 2500,
		pauseOnHover: true,
		arrows: false,
		pagination: false,
		breakpoints: {
			1200: {
				perPage: 2,
				gap: '0.5rem',
			},
			900: {
				perPage: 3,
			},
			600: {
				perPage: 3,
			},
			400: {
				perPage: 3,
			},
		},
	};

	return (
		<Layout>
			<Box sx={{ px: 10, position: 'relative', top: '-6rem' }}>
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