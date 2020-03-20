import React from 'react';

import {
  DailyEntriesRoot,
  Title,
  EntriesTable,
  TableHeaders,
  Entries,
  NoEntries
} from './styled-components';

import Entry from './Entry/Entry';

export default class DailyEntries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    };

    this.addEntry = this.addEntry.bind(this);
    this.toggleEntryType = this.toggleEntryType.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  render() {
    const { entries } = this.state;
    const hasEntries = entries.length;
    return (
      <DailyEntriesRoot>
        <Title>Today</Title>
        {hasEntries ? (
          <EntriesTable>
            <TableHeaders>
              <div>Start</div>
              <div>End</div>
              <div />
              <div />
            </TableHeaders>
            <Entries>
              {entries.map((userEntry, index) => (
                <Entry
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  // TODO: maybe switch this not to use index as key
                  id={index}
                  userEntry={userEntry}
                  handleToggle={this.toggleEntryType}
                  handleRemove={this.removeEntry}
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

  toggleEntryType(id) {
    const prevState = Object.assign({}, this.state);
    const { entries } = prevState;
    const entry = entries[id];

    entry.type = entry.type === 'work' ? 'lunch' : 'work';
    this.setState(prevState);
  }

  removeEntry(id) {
    const prevState = Object.assign({}, this.state);
    const { entries } = prevState;
    entries.splice(id, 1);

    this.setState(prevState);
  }
}
