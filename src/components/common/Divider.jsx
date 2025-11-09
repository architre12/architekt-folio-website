import { Divider, Box } from '@mui/material';

export default function ThickDivider() {
  return (
    <Box sx={{ my: 4 }}>
      <Divider
        sx={{
          width: '100px',         
          height: '12px',           
          bgcolor: 'primary.main',
          borderRadius: 0,
          mx: '5px',
        }}
      />
    </Box>
  );
}
