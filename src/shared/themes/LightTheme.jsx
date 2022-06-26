import {createTheme} from "@mui/material";

export const customLightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fff159',
        },
        secondary: {
            main: '#E3E3E3',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h2',
                    h2: 'h2',
                    h3: 'h2',
                    h4: 'h2',
                    h5: 'h2',
                    h6: 'h2',
                    subtitle1: 'h2',
                    subtitle2: 'span',
                    body1: 'span',
                    text: 'span',
                },
            },
        },
    },
});