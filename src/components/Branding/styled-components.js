import styled from 'styled-components';
import { color } from '../common-styled-components';

export const BrandingContainer = styled.div`
  position: absolute;
  top: 0px;
  width: inherit;
  overflow-wrap: break-word;
  text-align: center;
  font-size: 28px;
  letter-spacing: -2px;
  margin-top: 16px;
  margin-left: -1px;
  font-weight: bold;
  span:nth-child(1) {
    color: ${color.blue};
  }
  span:nth-child(2) {
    color: ${color.orange};
  }
`;
