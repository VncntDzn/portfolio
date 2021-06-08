import React from 'react';
import {
  Grid,
  Typography,
  AppBar,
  Box,
  Toolbar,
  makeStyles,
} from '@material-ui/core';

import PropTypes from 'prop-types';
const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
  },
}));
const AboutMe = (props) => {
  const styles = useStyles();
  return (
    <Grid
      className={styles.container}
      container
      direction='row'
      style={{ border: '3px solid red' }}
    >
      <Grid>
        <Box display='flex' alignItems='center'>
          <hr style={{ width: '1.2rem', border: 'thin solid #FE014E' }} />
          <Typography variant='subtitle1'>&nbsp; About Me,</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
