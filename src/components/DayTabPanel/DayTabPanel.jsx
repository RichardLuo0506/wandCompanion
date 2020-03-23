import React from 'react';
import PropTypes from 'prop-types';
import {
  DayTabPanelRoot,
  TopSection,
  BottomSection
} from './styled-components';
import EntryEditor from '../EntryEditor/EntryEditor';
import DailyEntries from '../DailyEntries/DailyEntries';

export default class TabPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.dailyEntriesRef = React.createRef();
    this.entryEditorRef = React.createRef();
    this.onAddEntry = this.onAddEntry.bind(this);
  }

  render() {
    const { value, index, ...other } = this.props;

    return (
      <DayTabPanelRoot role="tabpanel" hidden={value !== index} {...other}>
        <TopSection boxShadow={2}>
          <DailyEntries ref={this.dailyEntriesRef} />
        </TopSection>
        <BottomSection>
          <EntryEditor ref={this.entryEditorRef} onAddEntry={this.onAddEntry} />
        </BottomSection>
      </DayTabPanelRoot>
    );
  }

  onAddEntry(entryType) {
    const { current: entryEditorInstance } = this.entryEditorRef;
    const { current: dailyEntriesInstance } = this.dailyEntriesRef;
    const entry = {
      startTime: entryEditorInstance.state.startTime,
      startTimeFormatted: entryEditorInstance.state.startTimeFormatted,
      endTime: entryEditorInstance.state.endTime,
      endTimeFormatted: entryEditorInstance.state.endTimeFormatted,
      minutes: entryEditorInstance.state.timeDiff,
      type: entryType
    };
    dailyEntriesInstance.addEntry(entry);
  }
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
