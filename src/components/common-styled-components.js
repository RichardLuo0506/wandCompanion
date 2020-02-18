import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

// https://dribbble.com/shots/2737152-Calendar-View-of-Project-Management

export const color = {
  dark: `#2a3043`,
  light: `#dfe0e7`,
  lighter: `#edeef5`,
  orange: `#ffb533`
};

export const text = {
  color: color.dark,
  size: {
    md: '14px'
  }
};

export const icon = {
  color: {
    onDark: `#585f6d`
  }
};

export const MyIconButton = styled(IconButton)`
  border-radius: initial;
`;
