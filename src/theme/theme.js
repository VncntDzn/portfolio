import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#141f43',
        },
        secondary: {
            main: '#8CACB5',
        },


    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '1.8rem'
        },
        subtitle1: {
            fontFamily: 'Raleway',
            fontSize: '1.4rem'
        }
    }

});

export default theme;