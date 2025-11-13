
import { Box, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Icon } from '../../common';
import Layout from '../../layout/Layout';

import { testimonials } from '../../../data/testimonials';
import theme from '../../../theme/theme';

import '@splidejs/react-splide/css';
import '../../../styles/testimonials.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Box
      elevation={0}
      sx={{
        p: 4,
        mx: 2,
        borderRadius: '16px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
      }}
    >
      <Box>
        <Icon 
			name='quote' 
			size={56}
			color='#fff'
		/>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography fontSize={{ xs: '2.2rem', lg: '1rem' }} variant="body" sx={{ lineHeight: 1.7, fontStyle: 'italic' }}>{testimonial.content}</Typography>
      </Box>
      <Box mt={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', fontSize: { xs: '2rem', lg: '1.1rem'} }} gutterBottom>{testimonial.name}</Typography>
          <Typography fontSize={{xs: '1.5rem', lg: '1rem'}} variant="body">{testimonial.position}</Typography>
          <Typography fontSize={{xs: '1.5rem', lg: '1rem'}} variant="body" color='primary'>{testimonial.company}</Typography>
      </Box>
    </Box>
  );
};

const Testimonials = () => {
  const splideOptions = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: '2rem',
    autoplay: true,
    interval: 8000,
    pauseOnHover: true,
    arrows: false,
    pagination: true,
    focus: 'center',
    trimSpace: false,
    breakpoints: {
      1200: {
        perPage: 1,
      },
      768: {
        perPage: 1,
        arrows: false,
      },
    },
  };

  return (
    <Layout py={4} backgroundColor={theme.palette.background.secondary}>
      <Box sx={{ px: 10, mx: 'auto' }}>
        <Splide options={splideOptions}>
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SplideSlide>
          ))}
        </Splide>
      </Box>
    </Layout>
  );
};

export default Testimonials;