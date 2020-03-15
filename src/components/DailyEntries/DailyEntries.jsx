import React from 'react';

import {
  DailyEntriesRoot,
  Title,
  EntriesTable,
  TableHeaders,
  Entries
} from './styled-components';

import Entry from './Entry/Entry';

export default class DailyEntries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: []
    };

    this.addEntry = this.addEntry.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    const { entries } = this.state;
    return (
      <DailyEntriesRoot>
        <Title>Today</Title>
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
                handleClick={this.handleToggle}
                userPunch={userPunch}
              />
            ))}
          </Entries>
        </EntriesTable>
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

  handleToggle(id) {
    const prevState = Object.assign({}, this.state);
    const { entries } = prevState;
    const entry = entries[id];

    entry.type = entry.type === 'work' ? 'lunch' : 'work';
    this.setState(prevState);
  }
}