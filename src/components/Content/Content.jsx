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
  IconButtonWrapper
} from './styled-components';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPunches: [
        {
          in: '9:00am',
          out: '12:00pm',
          type: 'work'
        },
        {
          in: '1:00pm',
          out: '2:00pm',
          type: 'lunch'
        },
        {
          in: '3:00pm',
          out: '5:00pm',
          type: 'work'
        },
        {
          in: '9:00am',
          out: '12:00pm',
          type: 'work'
        },
        {
          in: '1:00pm',
          out: '2:00pm',
          type: 'lunch'
        },
        {
          in: '3:00pm',
          out: '5:00pm',
          type: 'work'
        },
        {
          in: '9:00am',
          out: '12:00pm',
          type: 'work'
        },
        {
          in: '1:00pm',
          out: '2:00pm',
          type: 'lunch'
        },
        {
          in: '3:00pm',
          out: '5:00pm',
          type: 'work'
        }
      ]
    };

    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(id) {
    var prevState = Object.assign({}, this.state);
    //Returns the only the userPunches array from previous state
    prevState.userPunches = prevState.userPunches.slice();
    //Each time prevState.userPunches[id] is called will create a new object with all properties of userPunches[id] Object.assign({}, someObject) avoid mutating state directly.
    prevState.userPunches[id] = Object.assign({}, prevState.userPunches[id]);
    prevState.userPunches[id].type === 'work'
      ? (prevState.userPunches[id].type = 'lunch')
      : (prevState.userPunches[id].type = 'work');
    // will update state with new userPunches object
    this.setState(prevState);
  }

  render() {
    return (
      <ContentRoot>
        <Title>Today</Title>
        <ContentContainer>
          <EntriesHeaders>
            <div>Start</div>
            <div>End</div>
            <div />
            <div>Remove</div>
            <div>Edit</div>
          </EntriesHeaders>
          <Entries>
            {this.state.userPunches.map((userPunch, index) => {
              return (
                <div key={index}>
                  <div>{userPunch.in}</div>
                  <div>{userPunch.out}</div>
                  <ToggleButtonsContainer>
                    <ActiveToggle onClick={() => this.handleToggle(index)}>
                      <WorkIcon
                        className={
                          userPunch.type === 'work' ? 'work-active' : ''
                        }
                      />
                    </ActiveToggle>
                    <ActiveToggle onClick={() => this.handleToggle(index)}>
                      <FastfoodIcon
                        className={
                          userPunch.type === 'lunch' ? 'lunch-active' : ''
                        }
                      />
                    </ActiveToggle>
                  </ToggleButtonsContainer>
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
                </div>
              );
            })}
          </Entries>
        </ContentContainer>
      </ContentRoot>
    );
  }
}
