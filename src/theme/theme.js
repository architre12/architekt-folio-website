import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#feb029',
    },
    secondary: {
      main: '#9ca0af',
    },
    background: {
      default: '#323647',
      secondary: '#242734',
    },
    text: {
      primary: '#e1e4ed',
      secondary: '#ebeef3',
	  white: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    h1: { fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '6rem' },
    h2: { fontFamily: "'Outfit', sans-serif", fontWeight: 500, fontSize: '4rem', letterSpacing: '0.05rem' },
    h4: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '0.1rem',
    },
	h5: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 500,
      fontSize: '1.6rem',
	  letterSpacing: '0.1rem',
    },
    h6: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontSize: '1.5rem',
      letterSpacing: '0.25rem'
    },
    body: { fontSize: '1rem', lineHeight: 2, fontWeight: 300, display: 'block' },
    bodyBold: { fontSize: '1rem', lineHeight: 1.5, fontWeight: 700, display: 'block' },
	bodyLarge: { fontSize: '1.25rem', lineHeight: 1.5, fontWeight: 400, letterSpacing: '0.05rem' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          
        },
      },
    },
  },
});

export default theme;
