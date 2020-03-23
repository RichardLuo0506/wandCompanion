import React from 'react';
import { EntryEditorRoot } from './styled-components';
import MyTextFieldTimePicker from './MyTextFieldTimePicker';
import NumberDisplay from './NumberDisplay/NumberDisplay';
import PropTypes from 'prop-types';
import { color, text } from '../theme';
import { parse, format } from 'date-fns';
import differenceInMinutes from 'date-fns/differenceInMinutes';

export default class EntryEditor extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();

    const defaults = {
      startTime: '09:00',
      endTime: '12:00',
      numDisplay: {},
      timeDiff: 180
    };
    this.state = {
      ...defaults,
      // TODO: not correct way of doing this
      ...this.state,
      ...{
        startTimeFormatted: this.formatTime(defaults.startTime),
        endTimeFormatted: this.formatTime(defaults.endTime)
      }
    };

    this.formatTime = this.formatTime.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
  }

  componentDidUpdate() {
    this.updateNumberDisplay();
    console.log(this.state)

  }

  render() {
    const { hoveredAddTimeBtn } = this.props;
    const { startTime, endTime, timeDiff } = this.state;

    if (hoveredAddTimeBtn) {
      if (hoveredAddTimeBtn === 'work') {
        this.numDisplayColor = color.blue;
      } else if (hoveredAddTimeBtn === 'lunch') {
        this.numDisplayColor = color.orange;
      }
    } else {
      this.numDisplayColor = text.color;
    }

    return (
      <EntryEditorRoot>
        <MyTextFieldTimePicker
          id="startTime"
          label="Start"
          defaultValue={startTime}
          onChange={this.onTimeChange}
        />
        <MyTextFieldTimePicker
          id="endTime"
          label="End"
          defaultValue={endTime}
          onChange={this.onTimeChange}
        />
        <NumberDisplay color={this.numDisplayColor} timeDiff={timeDiff} />
      </EntryEditorRoot>
    );
  }

  calcTimeDiff() {
    const { startTime, endTime } = this.state;
    const startDate = parse(startTime, 'HH:mm', this.date);
    const endDate = parse(endTime, 'HH:mm', this.date);

    const diff = differenceInMinutes(endDate, startDate);
    return diff;
  }

  formatTime(time) {
    const timeParsed = parse(time, 'HH:mm', this.date);
    const timeFormatted = format(timeParsed, 'hh:mm a');
    return timeFormatted;
  }

  loadEntry(entry) {
    this.setState({
      ...this.state,
      startTime: entry.startTime,
      endTime: entry.endTime,
      type: entry.type
    });
  }

  onTimeChange(id, time) {
    this.setState({
      [id]: time,
      [`${id}Formatted`]: this.formatTime(time)
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

EntryEditor.propTypes = {
  hoveredAddTimeBtn: PropTypes.string
};
