import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '../common/Divider';

import heroImage from '../../assets/images/hero-image.webp';

const Hero = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid 
            size={{ xs: 12, md: 8 }}
            sx={{
                height: '100%',
                backgroundImage: `url(${heroImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 20px',
                backgroundSize: 'cover',
            }}
        >
          <Box sx={{ mt: 14, px: 8, pt: 16}}>
            {/* <Typography variant='h6' color="primary" gutterBottom>Hi, there!</Typography> */}
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                '& span': {
                  color: theme => theme.palette.primary.main,
                },
                lineHeight: 0.95,
              }}
            >
              I'm <span>Archit</span> <br /> Chitre.
            </Typography>
            <Divider />
          </Box>
          <Box sx={{ px: 6, mt: 8 }}>
            <Stack direction="row" spacing={3}>
              <IconButton size="large" aria-label="linkedin" href="https://linkedin.com">
                <LinkedInIcon sx={{ fontSize: '3.5rem' }} />
              </IconButton>
              <IconButton size="large" aria-label="github" href="https://linkedin.com">
                <GitHubIcon sx={{ fontSize: '3.5rem' }} />
              </IconButton>
              <IconButton size="large" aria-label="facebook" href="https://linkedin.com">
                <FacebookIcon sx={{ fontSize: '3.5rem' }} />
              </IconButton>
              <IconButton size="large" aria-label="instagram" href="https://linkedin.com">
                <InstagramIcon sx={{ fontSize: '3.5rem' }} />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Container sx={{ px: 2 }} maxWidth="sm">
            <Box>
                <Stack direction="row" spacing={3}>
                    <Button variant="text" color='secondary'>Text</Button>
                    <Button variant="text" color='secondary'>Text</Button>
                    <Button variant="text" color='secondary'>Text</Button>
                </Stack>
            </Box>
            <Box sx={{ mt: 8 }}>
                <Typography variant="h6" gutterBottom sx={{ mb: 4}} color='secondary'>Introduction</Typography>
                <Typography variant="h4" gutterBottom sx={{ mb: 4}}>
                    Software Engineer and Developer, based in Mumbai
                </Typography>
                <Typography sx={{ mt: 12 }} variant="body" color='secondary' gutterBottom>
                    I am a passionate software engineer with experience in building web applications using modern technologies. I love to create efficient and scalable solutions that solve real-world problems.
                </Typography>
            </Box>
            <Box sx={{ mt: 4, textAlign: 'left' }}>
                <Button variant="text" color="primary" endIcon={<ArrowForwardIcon />}>Contact Me</Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
