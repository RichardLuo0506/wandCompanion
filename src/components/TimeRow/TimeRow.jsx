import React from 'react';
import { TimeRowWrapper } from './styled-components';
import MyTextFieldTimePicker from './MyTextFieldTimePicker';
import NumberDisplay from './NumberDisplay/NumberDisplay';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { parse } from 'date-fns';
import { differenceInMinutes } from 'date-fns/differenceInMinutes';
// import MyKeyboardTimePicker from './MyKeyboardTimePicker';

export default class TimeRow extends React.Component {
  constructor(props) {
    super(props);
    this.onTimeChange = this.onTimeChange.bind(this);

    this.state = {
      startTime: '09:00',
      endTime: '12:00'
    };
  }

  render() {
    // const now = new Date();
    // const year = now.getFullYear();
    // const month = now.getMonth();
    // const date = now.getDate();

    // this.startDate = new Date(year, month, date, 9, 0, 0);
    // this.endDate = new Date(year, month, date, 12, 0, 0);

    const { hoveredAddTimeBtn } = this.props;
    const { startTime, endTime } = this.state;

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
      <TimeRowWrapper>
        <MyTextFieldTimePicker
          id="startTime"
          label="Start Time"
          defaultValue={startTime}
          onChange={this.onTimeChange}
        />
        <MyTextFieldTimePicker
          id="endTime"
          label="End Time"
          defaultValue={endTime}
          onChange={this.onTimeChange}
        />
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
      </TimeRowWrapper>
    );
  }

  onTimeChange(id, time) {
    this.setState({
      [id]: time
    });

    const timeDiff = this.calcTimeDiff();
  }

  calcTimeDiff() {
    const { startTime, endTime } = this.state;
    const startDate = parse(startTime, 'HH:mm', new Date());
    const endDate = parse(endTime, 'HH:mm', new Date());

    // const diff = differenceInMinutes(startDate, endDate);
    var diff = differenceInMinutes(
      new Date(2014, 6, 2, 12, 20, 0),
      new Date(2014, 6, 2, 12, 7, 59)
    );
    console.log('', diff);
    debugger
  }
}

TimeRow.propTypes = {
  hoveredAddTimeBtn: PropTypes.string
};
