import styled from 'styled-components';
import { text } from '../../theme';

export const NumberDisplayRoot = styled.div`
  display: block;
  flex: 1;
  margin: 16px 16px 16px 0;
  text-align: center;
`;

export const Label = styled.div`
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
  align-self: center;
`;
export const Number = styled.span`
  font-size: 20px;
  margin: 0 1px 0 4px;
  font-weight: normal;
`;
export const Unit = styled.span``;
