import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Hidden,
  Button,
  IconButton,
} from '@material-ui/core';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import Lottie from 'react-lottie';
import Developer from 'lottie/Developer';

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
            I'M <span style={{ color: '#FE014E' }}>VINCENT P. DIZON</span>
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
          <Button
            className={styles.buttonStyle}
            color='secondary'
            variant='contained'
            endIcon={<GetAppRoundedIcon />}
          >
            Download CV
          </Button>
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
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
