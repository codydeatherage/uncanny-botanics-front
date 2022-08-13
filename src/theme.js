import WinterPrincess from './fonts/Winter-Princess.ttf';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Winter Princess, Arial, Roboto',
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'Winter Princess',
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Winter Princess';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Winter Princess'), url(${WinterPrincess}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': ['Winter Princess'],
            },
        },
    },
})

export default theme;