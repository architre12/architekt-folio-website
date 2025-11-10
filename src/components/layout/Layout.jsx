import { Box, Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <Box>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
    </Box>
  );
}
