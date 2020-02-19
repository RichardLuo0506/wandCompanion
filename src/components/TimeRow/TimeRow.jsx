import React from 'react';
import { TimeRowContainer } from './styled-components';
import MyTextFieldTimePicker from './MyTextFieldTimePicker';
import NumberDisplay from './NumberDisplay/NumberDisplay';
import PropTypes from 'prop-types';
import { theme } from '../theme';
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

    const { hoveredAddTimeBtn } = this.props;

    if (hoveredAddTimeBtn) {
      if (hoveredAddTimeBtn === 'lunch') {
        this.numDisplayColor = theme.palette.primary.main;
      } else if (hoveredAddTimeBtn === 'work') {
        this.numDisplayColor = theme.palette.secondary.main;
      }
    } else {
      this.numDisplayColor = theme.palette.text.primary;
    }

    return (
      <TimeRowContainer>
        <MyTextFieldTimePicker label="Start Time" defaultValue="09:00" />
        <MyTextFieldTimePicker label="End Time" defaultValue="12:00" />
        <NumberDisplay color={this.numDisplayColor} />
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

TimeRow.propTypes = {
  hoveredAddTimeBtn: PropTypes.string
};
