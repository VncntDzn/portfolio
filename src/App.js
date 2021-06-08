import { ThemeProvider, CssBaseline, makeStyles, Box } from '@material-ui/core';
import Navbar from 'layouts/Navbar';
import AboutMe from 'pages/AboutMe';
import LandingPage from 'pages/LandingPage';
import theme from 'theme/theme';


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#141f43',
    padding: '0 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0 2rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '0 10rem',
    },
  },
}));
const App = () => {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.container} >
        <Navbar />
        <LandingPage />
        <AboutMe />
      </Box>
    </ThemeProvider>
  );
}

export default App;
