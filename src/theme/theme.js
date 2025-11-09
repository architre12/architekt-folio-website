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
    },
  },
  typography: {
    fontFamily: "'Manrope', sans-serif",
    h1: { fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '8rem' },
    h4: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
      fontSize: '2.8rem',
      letterSpacing: '0.1rem',
    },
    h6: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontSize: '1.85rem',
      letterSpacing: '0.25rem'
    },
    body: { fontSize: '1.3rem', lineHeight: 2, fontWeight: 300 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 20px',
          fontSize: '1.6rem',
          textTransform: 'none',
          borderRadius: '8px',
          color: '#feb029',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
