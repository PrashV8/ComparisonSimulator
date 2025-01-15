import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';


const Navbar = () => {
  return (
    <AppBar
    position="static"
    elevation={0}
    sx={{
      backgroundColor: '#6a1b9a', // Deep purple color
      color: 'white', // White text for contrast
    }}
  >
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Comparison Simulator
          </Typography>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
          <Button color="inherit" component={Link} href="/mood">
            Mood Poll
          </Button>
       

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

