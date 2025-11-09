import { Box, Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box>
      <Container fixed maxWidth="xl" sx={{ zIndex: 1, position: 'relative' }}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </Container>
    </Box>
  );
}
