import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Hidden,
  Button,
  IconButton,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Lottie from 'react-lottie';
import Developer from 'lottie/Developer';

import { motion } from 'framer-motion';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Developer,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
  },
  nameContainer: {
    fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
  },
  buttonStyle: {
    color: 'white',
    backgroundColor: '#FE014E',
    border: 'thin solid white',
    fontFamily: 'Raleway',
  },
}));
const LandingPage = () => {
  const styles = useStyles();
  return (
    <Grid
      id='home'
      container
      item
      justify='center'
      alignItems='center'
      direction='row-reverse'
      className={styles.container}
    >
      <Grid container item sm={6}>
        <Lottie options={defaultOptions} height='100%' width='90%' />
      </Grid>
      <Grid container item sm={6}>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='flex-start'
          alignItems='flex-start'
        >
          <Box display='flex' alignItems='center'>
            <hr style={{ width: '1.2rem', border: 'thin solid #FE014E' }} />
            <Typography variant='subtitle1'>&nbsp; Hello,</Typography>
          </Box>
          <Typography className={styles.nameContainer} variant='h1'>
            I'M VINCENT DIZON
          </Typography>
          <Box display='flex'>
            <Typography variant='subtitle1' color='secondary'>
              Web Developer
            </Typography>
            <Hidden lgDown>
              <Typography variant='subtitle1' color='secondary'>
                &nbsp;| 2 years of Professional Experience
              </Typography>
            </Hidden>
          </Box>
          <motion.div
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              type: 'spring',
              repeatType: 'mirror',
              ease: 'easeOut',
            }}
          >
            <Button
              className={styles.buttonStyle}
              color='secondary'
              variant='contained'
              endIcon={<ArrowDropDownIcon />}
            >
              Know more
            </Button>
          </motion.div>

          <Box>
            <IconButton
              href='https://www.linkedin.com/in/vincent-dizon-34831817b/'
              color='secondary'
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton href='https://github.com/VncntDzn' color='secondary'>
              <GitHubIcon />
            </IconButton>
            <IconButton
              href='https://www.instagram.com/vpdzn/'
              color='secondary'
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
