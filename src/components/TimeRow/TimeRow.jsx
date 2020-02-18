import React from 'react';
import { TimeRowContainer } from './styled-components';
import MyTextFieldTimePicker from './MyTextFieldTimePicker';
// import MyKeyboardTimePicker from './MyKeyboardTimePicker';

export default class TimeRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();

    this.startDate = new Date(year, month, date, 9, 0, 0);
    this.endDate = new Date(year, month, date, 12, 0, 0);
    return (
      <TimeRowContainer>
        <MyTextFieldTimePicker label="Start Time" defaultValue="09:00" />
        <MyTextFieldTimePicker label="End Time" defaultValue="12:00" />
        {/* <MyKeyboardTimePicker
          label="Start Time"
          placeholder="09:00 AM"
          date={this.startDate}
        />
        <MyKeyboardTimePicker
          label="End Time"
          placeholder="12:00 PM"
          date={this.endDate}
        /> */}
      </TimeRowContainer>
    );
  }
}
