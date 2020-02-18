import styled from 'styled-components';
import { color } from '../common-styled-components';

export const BrandingStyles = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  padding: 16px;
  span:nth-child(1) {
    color: ${color.dark};
  }
  span:nth-child(2) {
    color: ${color.orange};
  }
`;
