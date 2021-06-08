import { useState } from 'react';
import {
  Grid,
  makeStyles,
  Typography,
  AppBar,
  Box,
  Toolbar,
} from '@material-ui/core';
import { Cross as Hamburger } from 'hamburger-react';
import ElevatedScroll from './ElevatedScroll';
import HamburgerMenu from './HamburgerMenu';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('md')]: {
      padding: '0 2rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 5rem',
    },
  },
}));

const Navbar = (props) => {
  const styles = useStyles();
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
