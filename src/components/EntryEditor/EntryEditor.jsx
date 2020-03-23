import React from 'react';
import { EntryEditorRoot, EntryFieldsRow } from './styled-components';
import MyTextFieldTimePicker from './MyTextFieldTimePicker';
import NumberDisplay from '../NumberDisplay/NumberDisplay';
import { color, text } from '../theme';
import { parse, format } from 'date-fns';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import AddTimeBtnGrp from '../AddTimeBtnGrp/AddTimeBtnGrp';

export default class EntryEditor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.date = new Date();

    this.state = {
      startTime: '09:00',
      startTimeFormatted: this.formatTime('09:00'),
      endTime: '12:00',
      endTimeFormatted: this.formatTime('12:00'),
      timeDiff: 180,
      numDisplay: {}
    };

    this.addTimeBtnGrpHover = this.addTimeBtnGrpHover.bind(this);
    this.addTimeBtnGrpHover = this.addTimeBtnGrpHover.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
  }

  componentDidUpdate() {
    this.updateNumberDisplay();
    this.updateFormattedTimes();
    this.updateDisabledState();
  }

  render() {
    const {
      startTime,
      endTime,
      timeDiff,
      hoveredAddTimeBtn,
      invalid: invalidEntry
    } = this.state;
    const { onAddEntry } = this.props;

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
        <EntryFieldsRow>
          <MyTextFieldTimePicker
            id="startTime"
            label="Start"
            value={startTime}
            onChange={this.onTimeChange}
          />
          <MyTextFieldTimePicker
            id="endTime"
            label="End"
            value={endTime}
            onChange={this.onTimeChange}
          />
          <NumberDisplay color={this.numDisplayColor} timeDiff={timeDiff} />
        </EntryFieldsRow>
        <AddTimeBtnGrp
          onHover={this.addTimeBtnGrpHover}
          onAddEntry={onAddEntry}
          disabled={invalidEntry}
        />
      </EntryEditorRoot>
    );
  }

  // TODO: throttle this?
  addTimeBtnGrpHover(type) {
    this.setState({
      hoveredAddTimeBtn: type
    });
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

  updateDisabledState() {
    const { timeDiff } = this.state;
    const valid = timeDiff > 0;
    this.setState({ invalid: !valid });
  }

  updateNumberDisplay() {
    this.setState({ timeDiff: this.calcTimeDiff() });
  }

  updateFormattedTimes() {
    const { startTime, endTime } = this.state;
    this.setState({
      startTimeFormatted: this.formatTime(startTime),
      endTimeFormatted: this.formatTime(endTime)
    });
  }
}
