import styled from 'styled-components';
import { color } from '../common-styled-components';

export const BrandingStyles = styled.div`
  overflow-wrap: break-word;
  top: 8px;
  position: fixed;
  text-align: center;
  font-size: 28px;
  letter-spacing: -2px;
  span:nth-child(1) {
    color: ${color.blue};
    font-weight: bold;
  }
  span:nth-child(2) {
    color: ${color.orange};
    font-weight: bold;
  }
`;

export const BrandingContainer = styled.div``;
