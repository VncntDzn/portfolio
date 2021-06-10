import { Grid, Typography, Box, Button, makeStyles } from '@material-ui/core';
import webProjects from 'data/webProjects';

const useStyles = makeStyles((theme) => ({
  container: {
    color: 'white',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    backgroundColor: '#20316A',
    borderRadius: '10px',
    padding: '1rem',
    marginTop: '2rem',
    paddingBottom: '5rem',
    [theme.breakpoints.up('sm')]: {
      padding: '1rem 4rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '100%',
    },
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    objectFit: 'contain',
    height: '10rem',
    padding: '1.3rem',
    alignSelf: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '20rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '35rem',
    },
  },
  textStyle: {
    fontSize: '1.1rem',
  },
  buttonStyle: {
    fontFamily: 'Raleway',
    width: 'fit-content',
    alignSelf: 'flex-start',

    '&:hover': {
      color: '#FE014E',
    },
  },
}));
const ProjectDetails = ({ match }) => {
  const styles = useStyles();
  const { name } = match.params;
  const projectDetails = webProjects.filter(
    (param) => param.name.toLowerCase() === name
  );
  return (
    <Box paddingBottom={5}>
      <Grid className={styles.container}>
        <Typography style={{ textTransform: 'capitalize' }} variant='h1'>
          {name} Details
        </Typography>

        <Box
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          width='fit-content'
        >
          <hr style={{ width: '1.2rem', border: 'thin solid #FE014E' }} />
          <Typography
            color='secondary'
            variant='subtitle1'
            style={{ fontSize: '1rem' }}
          >
            &nbsp; Project Details
          </Typography>
        </Box>

        {projectDetails.map((data, i) => (
          <Box className={styles.detailsContainer} key={i}>
            <Typography className={styles.textStyle} variant='subtitle1'>
              Description: {data.description}
            </Typography>

            <img
              className={styles.imageContainer}
              src={data.image}
              alt={data.name}
            />
            <Box
              display='flex'
              alignItems='center'
              justifyContent='flex-start'
              width='fit-content'
            >
              <hr style={{ width: '1.2rem', border: 'thin solid #FE014E' }} />
              <Typography
                color='secondary'
                variant='subtitle1'
                style={{ fontSize: '1rem' }}
              >
                &nbsp; Project Info
              </Typography>
            </Box>

            <Typography className={styles.textStyle} variant='subtitle1'>
              Dev date: {data.dev_date}
            </Typography>
            <Box display='flex' flexWrap='wrap'>
              <Typography className={styles.textStyle} variant='subtitle1'>
                Tech stack:
              </Typography>
              {data.tech_stack.map((tech, index) => (
                <Typography
                  className={styles.textStyle}
                  variant='subtitle1'
                  style={{ padding: '0 5px' }}
                  key={index}
                >
                  {tech},
                </Typography>
              ))}
            </Box>
            <Button
              className={styles.buttonStyle}
              href={data.url}
              color='secondary'
            >
              Visit Website
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

ProjectDetails.propTypes = {};

export default ProjectDetails;
