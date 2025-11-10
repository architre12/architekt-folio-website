import { Divider, Box } from '@mui/material';

export default function ThickDivider({ size }) {
  return (
    <Box sx={{ mb: size === 'sm' ? 6 : 2 }}>
      <Divider
        sx={{
          width: size === 'sm' ? '65px' : '100px',         
          height: size === 'sm' ? '6px' : '12px',           
          bgcolor: 'primary.main',
          borderRadius: 0,
          mx: '5px'
        }}
      />
    </Box>
  );
}
