import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  breakpoints: {
    tablet: 769,
    desktop: 1080,
    maxWidth: 1100,
  },
  typography: {
    body3: {
      fontSize: '0.75rem',
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(253, 59, 76, 1)',
    },
    secondary: {
      main: 'rgba(58, 211, 158, 1)',
    },
    custom: {
      white: 'rgba(255, 255, 255, 1)',
      background: 'rgba(246, 247, 249, 1)',
      homeGridOne: 'rgba(250, 58, 57, 1)',
      homeGridTwo: 'rgba(253, 94, 31, 1)',
      homeGridThree: 'rgba(253, 93, 78, 1)',
      homeGridFour: 'rgba(253, 149, 38, 1)',
      footer: 'rgba(0, 0, 0, 1)',
      onDarkSurface: 'rgba(255, 255, 255, 0.8)',
    },
  },
});
