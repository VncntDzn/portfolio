import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FAFAFA',
        },
        secondary: {
            main: '#FCAF18',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '2rem'
        }
    }

});

export default theme;