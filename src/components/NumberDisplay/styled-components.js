import styled from 'styled-components';
import { text, color } from '../theme';

export const NumberDisplayRoot = styled.div`
  ${props => {
    if (props.inline) {
      return `display: inline-block;`;
    } else {
      return `display: block;
              margin: 16px 16px 16px 0;`;
    }
  }}
  flex: 1;
  text-align: center;
`;

export const Label = styled.div`
  display: ${props => {
    return props.inline ? 'none' : 'block';
  }};
  margin-bottom: 6px;
  font-size: 10.5px;
  color: ${text.colorLight};
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: ${text.color};
  font-size: 10.5px;
`;

export const Sign = styled.span`
  display: ${props => {
    return props.inline ? 'none' : 'block';
  }};
  align-self: center;
  margin-right: 2px;
`;

export const Number = styled.span`
  ${props => {
    if (props.inline) {
      return `font-size: 16px;
              color: ${color.blue};`;
    } else {
      return `font-size: 20px;`;
    }
  }}
  font-size: ${props => (props.inline ? '16px' : '20px')};
  margin: 0 1px 0 3px;
  font-weight: normal;
`;

export const Unit = styled.span`
  color: ${props => (props.inline ? color.blue : 'inherit')};
`;
