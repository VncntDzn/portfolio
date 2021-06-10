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
        <AppBar color='primary'>
          <Toolbar>
            <Grid container item alignItems='center' justify='space-between'>
              <Typography variant='h1' style={{ color: 'white' }}>
                Vincent
              </Typography>
              <Box zIndex={1}>
                <Hamburger
                  label='Show menu'
                  rounded
                  easing='ease-in'
                  color='white'
                  size={22}
                  toggled={open}
                  toggle={() => setOpen(!open)}
                />
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
