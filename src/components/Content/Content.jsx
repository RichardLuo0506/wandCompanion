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
  EntriesHeaders
} from './styled-components';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();

    this.state = {
      userPunches: [
        {
          in: '9:00am',
          out: '--',
          type: 'Work'
        },
        {
          in: '--',
          out: '12:00pm',
          type: 'Lunch'
        },
        {
          in: '1:00pm',
          out: '--',
          type: 'Lunch'
        },
        {
          in: '--',
          out: '5:00',
          type: 'Work'
        },
        {
          in: '9:00am',
          out: '--',
          type: 'Work'
        },
        {
          in: '--',
          out: '12:00pm',
          type: 'Lunch'
        },
        {
          in: '1:00pm',
          out: '--',
          type: 'Lunch'
        },
        {
          in: '--',
          out: '5:00pm',
          type: 'Work'
        },
        {
          in: '9:00am',
          out: '--',
          type: 'Work'
        },
        {
          in: '--',
          out: '12:00pm',
          type: 'Lunch'
        },
        {
          in: '1:00pm',
          out: '--',
          type: 'Lunch'
        },
        {
          in: '--',
          out: '5:00pm',
          type: 'Work'
        }
      ]
    };
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
            {this.state.userPunches.map(userPunch => {
              return (
                <div key={`${userPunch.in} + ${Math.random()}`}>
                  <div>{userPunch.in}</div>
                  <div>{userPunch.out}</div>
                  {userPunch.type === 'Work' ? (
                    <div className="non-button-icons">
                      <span className="active-punch left-icon">
                        <WorkIcon />
                      </span>
                      <span>
                        <FastfoodIcon />
                      </span>
                    </div>
                  ) : (
                    <div className="non-button-icons">
                      <span className="left-icon">
                        <WorkIcon />
                      </span>
                      <span className="active-punch">
                        <FastfoodIcon />
                      </span>
                    </div>
                  )}
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
