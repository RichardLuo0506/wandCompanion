import styled from 'styled-components';
import { color } from '../common-styled-components';

export const BrandingContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 0;
  width: 64px;
  font-size: 28px;
  text-align: center;
  user-select: none;
  letter-spacing: -2px;
  // "margin-left: -1px" fixes issue where "letter-spacing: -2px" only affects one child element
  margin-left: -1px;
  font-weight: bold;
  span:nth-child(1) {
    color: ${color.blue};
  }
  span:nth-child(2) {
    color: ${color.orange};
  }
`;
