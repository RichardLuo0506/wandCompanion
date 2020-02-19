import React from 'react';
import { BrandingStyles, BrandingContainer } from './styled-components';

export default class Branding extends React.Component {
  render() {
    return (
      <BrandingContainer style={{ width: 'inherit' }}>
        <BrandingStyles style={{ width: 'inherit', padding: '4px' }}>
          <span>w</span>
          <span>C</span>
        </BrandingStyles>
      </BrandingContainer>
    );
  }
}
