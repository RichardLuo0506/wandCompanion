import styled from 'styled-components';
import { theme } from '../../theme';

export const NumberDisplayRoot = styled.div`
  display: block;
  flex: 1;
  margin: 16px 16px 16px 0;
  text-align: center;
`;

export const Label = styled.div`
  margin-bottom: 6px;
  display: block;
  color: ${theme.palette.text.secondary};
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: ${theme.palette.text.primary};
`;

export const Sign = styled.span`
  align-self: center;
`;
export const Number = styled.span`
  font-size: 20px;
  margin: 0 1px 0 4px;
  font-weight: normal;
`;
export const Unit = styled.span``;
