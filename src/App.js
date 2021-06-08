import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Navbar from 'layouts/Navbar';
import theme from 'theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <h1>Hello my new portfolio is under development.</h1>
    </ThemeProvider>
  );
}

export default App;
