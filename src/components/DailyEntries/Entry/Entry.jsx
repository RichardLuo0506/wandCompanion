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
  const { id } = props;
  const { userEntry, handleEdit, handleRemove, handleToggle } = props;
  const { startTimeFormatted, type, endTimeFormatted } = userEntry;

  return (
    <EntryRoot>
      <StartTime>{startTimeFormatted}</StartTime>
      <EndTime>{endTimeFormatted}</EndTime>
      <ToggleButtonsContainer onClick={toggle}>
        <ActiveToggle>
          <WorkIcon className={type === 'work' ? 'work-active' : ''} />
        </ActiveToggle>
        <ActiveToggle>
          <FastfoodIcon className={type === 'lunch' ? 'lunch-active' : ''} />
        </ActiveToggle>
      </ToggleButtonsContainer>
      <EditButtonsContainer>
        <IconButtonWrapper>
          <IconButton className="edit-button" size="small" onClick={remove}>
            <DeleteIcon />
          </IconButton>
        </IconButtonWrapper>
        <IconButtonWrapper>
          <IconButton className="edit-button" size="small" onClick={edit}>
            <CreateIcon />
          </IconButton>
        </IconButtonWrapper>
      </EditButtonsContainer>
    </EntryRoot>
  );

  function edit() {
    handleEdit(id);
  }

  function remove() {
    handleRemove(id);
  }

  function toggle() {
    handleToggle(id);
  }
};

export default Entry;
