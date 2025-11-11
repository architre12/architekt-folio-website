import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingLeft: theme.spacing(2), // 16px on mobile
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3), // 24px on small tablets
    paddingRight: theme.spacing(3),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(4), // 32px on medium screens
    paddingRight: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: theme.spacing(6), // 48px on large screens
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: theme.spacing(8), // 64px on extra large screens
    paddingRight: theme.spacing(8),
  },
}));

const Layout = ({ 
  children, 
  maxWidth = "xl", 
  backgroundColor,
  py = 0,
  disableGutters = false,
  ...props 
}) => {
  const containerProps = disableGutters 
    ? { maxWidth, disableGutters: true }
    : { maxWidth };

  return (
    <Box 
      sx={{ 
        backgroundColor,
        py,
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        ...props.sx 
      }}
      {...props}
    >
      <StyledContainer {...containerProps}>
        {children}
      </StyledContainer>
    </Box>
  );
};

export default Layout;
