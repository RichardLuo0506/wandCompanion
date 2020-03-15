import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import WorkIcon from '@material-ui/icons/Work';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  EntryRoot,
  StartTime,
  EndTime,
  ToggleButtonsContainer,
  ActiveToggle,
  EditButtonsContainer,
  IconButtonWrapper
} from './styled-components';

const Entry = props => {
  handleClick = () => {
    this.props.onButtonToggle(this.props.value);
  };

  return (
    <EntryRoot key={props.index}>
      <StartTime>{props.userPunch.startTime}</StartTime>
      <EndTime>{props.userPunch.endTime}</EndTime>
      <ToggleButtonsContainer onClick={this.handleClick}>
        <ActiveToggle>
          <WorkIcon
            className={props.userPunch.type === 'work' ? 'work-active' : ''}
          />
        </ActiveToggle>
        <ActiveToggle>
          <FastfoodIcon
            className={props.userPunch.type === 'lunch' ? 'lunch-active' : ''}
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
    </EntryRoot>
  );
};

export default Entry;
