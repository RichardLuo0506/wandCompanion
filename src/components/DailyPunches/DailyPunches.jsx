import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  DailyPunchesRoot,
  Title,
  PunchesTable,
  TableHeaders,
  Entries,
  Entry,
  StartTime,
  EndTime,
  ToggleButtonsContainer,
  ActiveToggle,
  EditButtonsContainer,
  IconButtonWrapper
} from './styled-components';

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
              // eslint-disable-next-line react/no-array-index-key
              <Entry key={index}>
                <StartTime>{userPunch.startTime}</StartTime>
                <EndTime>{userPunch.endTime}</EndTime>
                <ToggleButtonsContainer
                  onClick={() => this.handleToggle(index)}
                >
                  <ActiveToggle>
                    <WorkIcon
                      className={`
                          ${userPunch.type === 'work' ? 'work-active' : ''}
                        `}
                    />
                  </ActiveToggle>
                  <ActiveToggle>
                    <FastfoodIcon
                      className={`
                          ${userPunch.type === 'lunch' ? 'lunch-active' : ''}
                        `}
                    />
                  </ActiveToggle>
                </ToggleButtonsContainer>
                <EditButtonsContainer>
                  <IconButtonWrapper>
                    <IconButton className="edit-button" size="small">
                      <DeleteIcon />
                    </IconButton>
                  </IconButtonWrapper>
                  <IconButtonWrapper>
                    <IconButton className="edit-button" size="small">
                      <CreateIcon />
                    </IconButton>
                  </IconButtonWrapper>
                </EditButtonsContainer>
              </Entry>
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
