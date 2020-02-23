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
  align-items: center;
  justify-content: center;
  color: ${theme.palette.text.primary};
`;

export const Symbol = styled.span`
  width: 24px;
  text-align: right;
`;
export const Number = styled.span`
  font-size: 20px;
  margin: 0 4px;
  font-weight: normal;
`;
export const Unit = styled.span`
  width: 24px;
  text-align: left;
`;
