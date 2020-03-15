import React from 'react';

import {
  DailyPunchesRoot,
  Title,
  PunchesTable,
  TableHeaders,
  Entries
} from './styled-components';

import Entry from './Entry/Entry';

export default class DailyPunches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPunches: []
    };

    this.addEntry = this.addEntry.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    const { userPunches } = this.state;
    return (
      <DailyPunchesRoot>
        <Title>Today</Title>
        <PunchesTable>
          <TableHeaders>
            <div>Start</div>
            <div>End</div>
            <div />
            <div />
          </TableHeaders>
          <Entries>
            {userPunches.map((userPunch, index) => (
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
        </PunchesTable>
      </DailyPunchesRoot>
    );
  }

  addEntry(entry) {
    const { userPunches } = this.state;
    const newPunches = [...userPunches, entry];
    this.setState({
      userPunches: newPunches
    });
  }

  handleToggle(id) {
    const prevState = Object.assign({}, this.state);
    const { userPunches } = prevState;
    const entry = userPunches[id];

    entry.type = entry.type === 'work' ? 'lunch' : 'work';
    this.setState(prevState);
  }
}
