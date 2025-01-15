// components/Footer.tsx
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
<Box
  component="footer"
  sx={{
    backgroundColor: 'primary.main',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: 'auto',
  }}
>
      <Typography variant="body1">
        © 2025 Comparison Simulator. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;