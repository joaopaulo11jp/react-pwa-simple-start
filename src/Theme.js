import {createMuiTheme, colors} from '@material-ui/core';

export const theme = createMuiTheme({
    palette: {
      primary: {
        light: colors.purple[300],
        main: colors.purple[500],
        dark: colors.purple[700],
      },
      secondary: {
        light: colors.green[300],
        main: colors.green[500],
        dark: colors.green[700],
      },
    },
  });