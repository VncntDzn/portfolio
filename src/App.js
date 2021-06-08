import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';
import Navbar from 'layouts/Navbar';
import theme from 'theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <h1>Hello my new portfolio is under development.</h1>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
        <h1>Recent Projects</h1>
        <ul>
          <li>E-comm: https://e-commerce-vncntdzn.vercel.app/</li>
          <li>HMI website: https://www.hmi.com.ph/</li>
          <li>Traderly website: https://traderly.vercel.app/</li>
          <li>Anime: https://anime-vpdizon.vercel.app/</li>
          <li>RTL: https://rtl-react.vercel.app/</li>
        </ul>
      </Box>
    </ThemeProvider>
  );
}

export default App;
