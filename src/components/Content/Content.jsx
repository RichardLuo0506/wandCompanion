import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CreateIcon from '@material-ui/icons/Create';

import {
  ContentRoot,
  Title,
  ContentContainer,
  Entries,
  EntriesHeaders,
  ToggleButtonsContainer,
  ActiveToggle
} from './styled-components';

export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userPunches: [
        {
          in: '9:00am',
          out: '--',
          type: 'work'
        },
        {
          in: '--',
          out: '12:00pm',
          type: 'lunch'
        },
        {
          in: '1:00pm',
          out: '--',
          type: 'lunch'
        },
        {
          in: '--',
          out: '5:00',
          type: 'work'
        },
        {
          in: '9:00am',
          out: '--',
          type: 'work'
        },
        {
          in: '--',
          out: '12:00pm',
          type: 'lunch'
        },
        {
          in: '1:00pm',
          out: '--',
          type: 'lunch'
        },
        {
          in: '--',
          out: '5:00pm',
          type: 'work'
        },
        {
          in: '9:00am',
          out: '--',
          type: 'work'
        },
        {
          in: '--',
          out: '12:00pm',
          type: 'lunch'
        },
        {
          in: '1:00pm',
          out: '--',
          type: 'lunch'
        },
        {
          in: '--',
          out: '5:00pm',
          type: 'work'
        }
      ]
    };

    this.handleToggle = this.handleToggle.bind(this);
  }
  // ? this.setState({ [this.state.userPunches[e].type]: 'lunch' })
  // : this.setState({ [this.state.userPunches[e].type]: 'work' });
  handleToggle(id) {
    const currentPunch = this.state.userPunches[id];
    console.log(currentPunch);

    // this.setState(
    //   () => ({
    //     ...this.state.userPunches,
    //     type: 'lunch'
    //   }),
    //   console.log(currentPunch)
    // );

    this.setState(
      prev => ({
        userPunches: prev.userPunches.map(punch =>
          punch.type === 'work' ? { ...punch, type: 'lunch' } : punch
        )
      }),
      console.log(currentPunch)
    );

    // currentPunch === 'work'
    //   ? this.setState({ currentPunch: 'lunch' })
    //   : console.log('its lunch');
  }

  render() {
    return (
      <ContentRoot>
        <Title>Today</Title>
        <ContentContainer>
          <EntriesHeaders>
            <div>In</div>
            <div>Out</div>
            <div />
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
                        className={userPunch.type === 'work' ? 'active' : ''}
                      />
                    </ActiveToggle>
                    <ActiveToggle onClick={() => this.handleToggle(index)}>
                      <FastfoodIcon
                        className={userPunch.type === 'lunch' ? 'active' : ''}
                      />
                    </ActiveToggle>
                  </ToggleButtonsContainer>
                  <IconButton className="edit-button" size="small">
                    <CreateIcon />
                  </IconButton>
                </div>
              );
            })}
          </Entries>
        </ContentContainer>
      </ContentRoot>
    );
  }
}
