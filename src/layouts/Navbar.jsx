import { useState } from 'react';
import { Grid, Typography, AppBar, Box, Toolbar } from '@material-ui/core';
import { Cross as Hamburger } from 'hamburger-react';
import ElevatedScroll from './ElevatedScroll';
import HamburgerMenu from './HamburgerMenu';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ElevatedScroll {...props}>
        <AppBar style={{ backgroundColor: 'white' }}>
          <Toolbar>
            <Grid container item alignItems='center' justify='space-between'>
              <Typography variant='h1'>Vincent</Typography>
              <Box zIndex={1}>
                <Hamburger toggled={open} toggle={() => setOpen(!open)} />
              </Box>
            </Grid>
            <HamburgerMenu open={open} />
          </Toolbar>
        </AppBar>
      </ElevatedScroll>

      <Toolbar />
    </>
  );
};

export default Navbar;
