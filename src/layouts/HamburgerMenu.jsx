import { makeStyles, Box, Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backdropFilter: 'blur(4px)',
    position: 'absolute',
    width: '20rem',
    height: '100vh',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',

    '&:hover': {
      color: '#FE014E',
    },
  },
}));
const HamburgerMenu = ({ open }) => {
  const styles = useStyles();
  return (
    <>
      {open && (
        <Box className={styles.container}>
          <Grid
            container
            direction='column'
            alignItems='center'
            justify='center'
            style={{ height: '100vh' }}
          >
            <Link href='/' className={styles.textStyle} variant='subtitle1'>
              Home
            </Link>
            <Link
              href='/#about'
              className={styles.textStyle}
              variant='subtitle1'
            >
              About
            </Link>
            <Link
              href='/#experience'
              className={styles.textStyle}
              variant='subtitle1'
            >
              Experience
            </Link>
            <Link
              href='/#projects'
              className={styles.textStyle}
              variant='subtitle1'
            >
              Projects
            </Link>
          </Grid>
        </Box>
      )}
    </>
  );
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
