// app/about/page.tsx
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
          Welcome to the <strong>Comparison Simulator</strong>! Our mission is to help you make informed decisions by comparing items side by side in a simple and intuitive way.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're comparing text items, images, or any other type of content, our tool makes it easy to select the best option. We believe in empowering users with the tools they need to make better choices.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team is dedicated to providing a seamless and enjoyable experience for all users. If you have any questions or feedback, feel free to reach out to us through the <Link href="/contact">Contact</Link> page.
        </Typography>
      </Box>
    </Container>
  );
}