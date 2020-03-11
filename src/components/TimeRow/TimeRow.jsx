import React from 'react';
import { TimeRowRoot } from './styled-components';
import MyTextFieldTimePicker from './MyTextFieldTimePicker';
import NumberDisplay from './NumberDisplay/NumberDisplay';
import PropTypes from 'prop-types';
import { theme } from '../theme';
import { parse } from 'date-fns';
import differenceInMinutes from 'date-fns/differenceInMinutes';

export default class TimeRow extends React.Component {
  constructor(props) {
    super(props);
    this.onTimeChange = this.onTimeChange.bind(this);

    this.state = {
      startTime: '09:00',
      endTime: '12:00',
      numDisplay: {},
      timeDiff: 0
    };
  }

  componentDidUpdate() {
    this.updateNumberDisplay();
  }

  render() {
    const { hoveredAddTimeBtn } = this.props;
    const { startTime, endTime, timeDiff } = this.state;

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
      <TimeRowRoot>
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
        <NumberDisplay color={this.numDisplayColor} timeDiff={timeDiff} />
      </TimeRowRoot>
    );
  }

  calcTimeDiff() {
    const { startTime, endTime } = this.state;
    const startDate = parse(startTime, 'HH:mm', new Date());
    const endDate = parse(endTime, 'HH:mm', new Date());

    const diff = differenceInMinutes(endDate, startDate);
    return diff;
  }

  onTimeChange(id, time) {
    this.setState({
      [id]: time
    });
  }

  updateNumberDisplay() {
    const { timeDiff: oldTimeDiff } = this.state;
    const newTimeDiff = this.calcTimeDiff();
    if (oldTimeDiff !== newTimeDiff) {
      this.setState({ ...this.state, timeDiff: this.calcTimeDiff() });
    }
  }
}

TimeRow.propTypes = {
  hoveredAddTimeBtn: PropTypes.string
};
