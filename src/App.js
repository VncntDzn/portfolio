import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Navbar from 'layouts/Navbar';
import theme from 'theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
