import React from 'react';
import { AddWorkBtn } from './styled-components';
import WorkIcon from '@material-ui/icons/Work';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CreateIcon from '@material-ui/icons/Create';

import { ContentRoot, Title, ContentContainer } from './styled-components';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();

    const formatAMPM = date => {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    };

    this.state = {
      userPunches: [
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        },
        {
          in: formatAMPM(date),
          out: formatAMPM(date),
          work: true,
          lunch: false
        }
      ]
    };
  }

  render() {
    return (
      <ContentRoot>
        <Title>Today</Title>
        <ContentContainer>
          <div className="entries-headers">
            <div>In</div>
            <div>Out</div>
            <span />
            <span />
            <div>Edit</div>
          </div>
          <div className="entries">
            {this.state.userPunches.map(userPunch => {
              return (
                <div key={`${userPunch.in} + ${Math.random()}`}>
                  <div>{userPunch.in}</div>
                  <div>{userPunch.out}</div>
                  <div className='non-button-icons'>
                    <WorkIcon />
                  </div>
                  <div className='non-button-icons'>
                   <FastfoodIcon />
                  </div>
                  <div>
                    <AddWorkBtn startIcon={<CreateIcon />} />
                  </div>
                </div>
              );
            })}
          </div>
        </ContentContainer>
      </ContentRoot>
    );
  }
}
