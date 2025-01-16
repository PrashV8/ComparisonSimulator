import { Typography, Container, Box } from '@mui/material';
import Link from 'next/link';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the <strong>Comparison Simulator</strong>! Our mission is to help you make informed decisions by comparing items side by side.
        </Typography>
        <Typography variant="body1" paragraph>
          Feel free to reach out to us through the <Link href="/contact">Contact</Link> page.
        </Typography>
      </Box>
    </Container>
  );
}
