import { createMuiTheme } from '@material-ui/core/styles';
import { color, icon } from './common-styled-components';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: color.orange
    },
    secondary: {
      main: color.blue
    },
    background: {
      dark: color.dark
    },
    icon: {
      onDark: icon.onDark
    }
  }
});
