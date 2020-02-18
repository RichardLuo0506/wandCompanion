import { createMuiTheme } from '@material-ui/core/styles';
import { color } from './common-styled-components';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: color.orange
    },
    secondary: {
      main: `#FF0000`
    }
  }
});
