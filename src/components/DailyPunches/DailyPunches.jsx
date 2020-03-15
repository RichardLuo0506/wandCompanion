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
      userPunches: [
        {
          startTime: '09:00am',
          endTime: '12:00pm',
          type: 'work'
        },
        {
          startTime: '01:00pm',
          endTime: '02:00pm',
          type: 'lunch'
        },
        {
          startTime: '03:00pm',
          endTime: '05:00pm',
          type: 'work'
        },
        {
          startTime: '09:00am',
          endTime: '12:00pm',
          type: 'work'
        },
        {
          startTime: '01:00pm',
          endTime: '02:00pm',
          type: 'lunch'
        },
        {
          startTime: '03:00pm',
          endTime: '05:00pm',
          type: 'work'
        },
        {
          startTime: '09:00am',
          endTime: '12:00pm',
          type: 'work'
        },
        {
          startTime: '01:00pm',
          endTime: '02:00pm',
          type: 'lunch'
        },
        {
          startTime: '03:00pm',
          endTime: '05:00pm',
          type: 'work'
        }
      ]
    };

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
              // eslint-disable-next-line react/no-array-index-key
              <Entry
                value={userPunch}
                onButtonToggle={this.handleClick}
                key={index}
              />
            ))}
          </Entries>
        </PunchesTable>
      </DailyPunchesRoot>
    );
  }

  handleToggle(id) {
    const prevState = Object.assign({}, this.state);
    const { userPunches } = prevState;
    const entry = userPunches[id];

    entry.type = entry.type === 'work' ? 'lunch' : 'work';
    this.setState(prevState);
  }
}
