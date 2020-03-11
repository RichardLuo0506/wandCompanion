import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  ContentRoot,
  Title,
  ContentContainer,
  Entries,
  EntriesHeaders,
  ToggleButtonsContainer,
  ActiveToggle,
  EditButtonsContainer,
  IconButtonWrapper
} from './styled-components';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPunches: [
        {
          startTime: '9:00am',
          endTime: '12:00pm',
          type: 'work'
        },
        {
          startTime: '1:00pm',
          endTime: '2:00pm',
          type: 'lunch'
        },
        {
          startTime: '3:00pm',
          endTime: '5:00pm',
          type: 'work'
        },
        {
          startTime: '9:00am',
          endTime: '12:00pm',
          type: 'work'
        },
        {
          startTime: '1:00pm',
          endTime: '2:00pm',
          type: 'lunch'
        },
        {
          startTime: '3:00pm',
          endTime: '5:00pm',
          type: 'work'
        },
        {
          startTime: '9:00am',
          endTime: '12:00pm',
          type: 'work'
        },
        {
          startTime: '1:00pm',
          endTime: '2:00pm',
          type: 'lunch'
        },
        {
          startTime: '3:00pm',
          endTime: '5:00pm',
          type: 'work'
        }
      ]
    };

    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(id) {
    var prevState = Object.assign({}, this.state);
    //*Returns the only the userPunches array from previous state
    prevState.userPunches = prevState.userPunches.slice();
    //*Each time prevState.userPunches[id] is called will create a new object with all properties of userPunches[id] Object.assign({}, someObject) avoid mutating state directly.
    prevState.userPunches[id] = Object.assign({}, prevState.userPunches[id]);
    prevState.userPunches[id].type === 'work'
      ? (prevState.userPunches[id].type = 'lunch')
      : (prevState.userPunches[id].type = 'work');
    //* will update state with new userPunches object
    this.setState(prevState);
  }

  render() {
    return (
      <ContentRoot>
        <Title>Today</Title>
        <EntriesHeaders>
          <div>Start</div>
          <div>End</div>
          <div />
          <div />
        </EntriesHeaders>
        <ContentContainer>
          <Entries>
            {this.state.userPunches.map((userPunch, index) => {
              return (
                <div key={index}>
                  <div>{userPunch.startTime}</div>
                  <div>{userPunch.endTime}</div>
                  <ToggleButtonsContainer>
                    <ActiveToggle onClick={() => this.handleToggle(index)}>
                      <WorkIcon
                        className={`
                          ${userPunch.type === 'work' ? 'work-active' : ''}
                        `}
                      />
                    </ActiveToggle>
                    <ActiveToggle onClick={() => this.handleToggle(index)}>
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
                </div>
              );
            })}
          </Entries>
        </ContentContainer>
      </ContentRoot>
    );
  }
}
