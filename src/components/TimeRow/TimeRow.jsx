import React from 'react';
import { TimeRowContainer } from './styled-components';
import MyTimePicker from './MyTimePicker';

export default class TimeRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TimeRowContainer>
        <MyTimePicker label="Start Time" defaultValue="09:00" />
        <MyTimePicker label="End Time" defaultValue="12:00" />
      </TimeRowContainer>
    );
  }
}
