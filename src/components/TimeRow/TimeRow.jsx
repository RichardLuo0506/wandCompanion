import React from 'react';
import { TimeRowContainer } from './styled-components';

export default class TimeRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TimeRowContainer>
        <h1>timerow</h1>
      </TimeRowContainer>
    );
  }
}
