import {
  Grid,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '3px solid red',
    backdropFilter: 'blur(4px)',
    position: 'absolute',
    width: '20rem',
    height: '100vh',
    top: 0,
    right: 0,
  },
}));
const HamburgerMenu = ({ open }) => {
  const styles = useStyles();
  return (
    <>
      {open && (
        <Box className={styles.container}>
          <h1>hi</h1>
        </Box>
      )}
    </>
  );
};

HamburgerMenu.propTypes = {};

export default HamburgerMenu;
