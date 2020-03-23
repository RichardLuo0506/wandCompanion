import React from 'react';

import {
  DailyEntriesRoot,
  Title,
  DailyTotal,
  EntriesTable,
  TableHeaders,
  Entries,
  NoEntries
} from './styled-components';

import Entry from './Entry/Entry';
import NumberDisplay from '../NumberDisplay/NumberDisplay';

export default class DailyEntries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    };

    this.addEntry = this.addEntry.bind(this);
    this.toggleEntryType = this.toggleEntryType.bind(this);
    this.removePunch = this.removePunch.bind(this);
  }

  render() {
    const { entries } = this.state;
    const hasEntries = entries.length > 0;
    const minutesTotal = this.calcMinutesTotal(entries);
    return (
      <DailyEntriesRoot>
        <Title>
          Today
          {hasEntries && (
            <DailyTotal>
              <span className="space"></span>
              <NumberDisplay timeDiff={minutesTotal} inline={true} />
            </DailyTotal>
          )}
        </Title>
        {hasEntries ? (
          <EntriesTable>
            <TableHeaders>
              <div>Start</div>
              <div>End</div>
              <div />
              <div />
            </TableHeaders>
            <Entries>
              {entries.map((userPunch, index) => (
                <Entry
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  // TODO: maybe switch this not to use index as key
                  id={index}
                  userPunch={userPunch}
                  handleToggle={this.toggleEntryType}
                  handleRemove={this.removePunch}
                />
              ))}
            </Entries>
          </EntriesTable>
        ) : (
          <NoEntries>No entries so far, add some 👇</NoEntries>
        )}
      </DailyEntriesRoot>
    );
  }

  addEntry(entry) {
    const { entries } = this.state;
    const newEntries = [...entries, entry];
    this.setState({
      entries: newEntries
    });
  }

  calcMinutesTotal(entries) {
    const minutes = entries.reduce((sum, current) => {
      if (current.type === 'work') {
        return sum + current.minutes;
      } else {
        return sum;
      }
    }, 0);
    return minutes;
  }

  toggleEntryType(id) {
    const prevState = Object.assign({}, this.state);
    const { entries } = prevState;
    const entry = entries[id];

    entry.type = entry.type === 'work' ? 'lunch' : 'work';
    this.setState(prevState);
  }

  removePunch(id) {
    const prevState = Object.assign({}, this.state);
    const { entries } = prevState;
    entries.splice(id, 1);

    this.setState(prevState);
  }
}
