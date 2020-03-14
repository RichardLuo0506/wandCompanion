import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';

// Main custom css variables. Prioritize these over Mui theme
export const color = {
  dark: `#2a3043`,
  light: `#dfe0e7`,
  lighter: `#edeef5`,
  orange: `#ff9600`,
  blue: `#007afe`,
  red: `#f44336`
};

export const text = {
  color: `rgba(0, 0, 0, 0.87)`,
  colorLight: `rgba(0, 0, 0, 0.54)`,
  colorMuted: `rgba(0, 0, 0, 0.38)`,
  size: {
    md: '14px'
  }
};

export const icon = {
  color: {
    onDark: `#585f6d`,
    muted: `gainsboro`
  }
};

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

export const MyIconButton = styled(IconButton)`
  border-radius: initial;
`;

export const MyButton = styled(Button)``;

// *?inspirations
// https://dribbble.com/shots/2737152-Calendar-View-of-Project-Management
// https://dribbble.com/shots/6292434-Adding-form-for-Services-planner-web-app
