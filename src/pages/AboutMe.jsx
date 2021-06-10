import {
  Grid,
  Typography,
  Box,
  makeStyles,
  Card,
  Avatar,
  Button,
} from '@material-ui/core';

import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import skills from 'data/skills';

const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },

  cardContainer: {
    backgroundColor: '#20316A',
    padding: '1rem',
    color: 'white',
    textIndent: '1.5rem',
    textAlign: 'justify',
    textJustify: 'inter-word',
    borderRadius: '20px',
  },
  skillsContainer: {
    backgroundColor: '#20316A',
    padding: '1rem',
    color: 'white',
    textIndent: '1.5rem',
    textAlign: 'justify',
    textJustify: 'inter-word',
    borderRadius: '20px',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '30rem',
    },
  },
  buttonStyle: {
    color: 'white',
    backgroundColor: '#FE014E',
    border: 'thin solid white',
    fontFamily: 'Raleway',
    margin: '1rem 0',
  },
}));
const AboutMe = (props) => {
  const styles = useStyles();
  return (
    <>
      <Box
        id='about'
        display='flex'
        alignItems='center'
        width='fit-content'
        my={5}
      >
        <hr style={{ width: '1.2rem', border: 'thin solid #FE014E' }} />
        <Typography variant='h1' style={{ color: 'white' }}>
          &nbsp; About Me
        </Typography>
      </Box>

      <Grid
        container
        item
        direction='row'
        alignItems='center'
        justify='center'
        className={styles.container}
      >
        <Grid container spacing={1}>
          <Grid container justify='center' item md={9}>
            <Card className={styles.cardContainer} raised>
              <Box display='flex' alignItems='center'>
                <Avatar alt='Vincent' className={styles.avatar} />
                <Typography> Hello, I'm Vincent P. Dizon</Typography>
              </Box>
              <Typography variant='subtitle1' style={{ fontSize: '1.1rem' }}>
                I am a web developer from Philippines. I have a rich experience
                in web development that focuses in{' '}
                <span style={{ borderBottom: 'thin solid #FE014E' }}>
                  Frontend Development
                </span>
                , also I am good at Backend Development.
              </Typography>
              <Button
                className={styles.buttonStyle}
                color='secondary'
                variant='contained'
                endIcon={<GetAppRoundedIcon />}
              >
                Download CV
              </Button>
            </Card>
          </Grid>
          <Grid container justify='flex-end' item md={3}>
            <Card className={styles.skillsContainer} raised>
              {skills.map((data) => (
                <Box key={data.title}>
                  <Typography>{data.title}</Typography>
                  <Box
                    style={{
                      width: '100%',
                      backgroundColor: '#ddd',
                      borderRadius: '15px',
                    }}
                  >
                    <Box
                      style={{
                        textAlign: 'right',
                        color: 'black',
                        width: `${data.percentage}`,
                        backgroundColor: `${data.color}`,
                        borderRadius: '15px',
                      }}
                    >
                      {data.percentage}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutMe;
