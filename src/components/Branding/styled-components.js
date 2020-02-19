import styled from 'styled-components';
import { color } from '../common-styled-components';

export const BrandingContainer = styled.div`
  position: fixed;
  top: 0px;
  width: inherit;
  overflow-wrap: break-word;
  text-align: center;
  font-size: 28px;
  letter-spacing: -2px;
  margin-top: 8px;
  margin-left: -2px;
  span:nth-child(1) {
    color: ${color.blue};
    font-weight: bold;
  }
  span:nth-child(2) {
    color: ${color.orange};
    font-weight: bold;
  }
`;
