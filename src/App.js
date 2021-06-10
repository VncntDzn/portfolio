import { ThemeProvider, CssBaseline, makeStyles, Box } from '@material-ui/core';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from 'routes/routes'
import Navbar from 'layouts/Navbar';
import theme from 'theme/theme';

import PublicRoutes from 'routes/PublicRoutes';
import Footer from 'pages/Footer';

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
      <Router>
        <Box className={styles.container} >
          <Navbar />
          <Switch>
            {routes.map((data) => (
              <PublicRoutes
                exact
                key={data.name}
                component={data.component}
                path={data.path} />
            ))}
          </Switch>
          <Footer />
        </Box>


      </Router>
    </ThemeProvider>
  );
}

export default App;
