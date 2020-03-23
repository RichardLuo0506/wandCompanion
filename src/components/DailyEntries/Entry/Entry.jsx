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
  const { id, userEntry, handleEdit, handleRemove, handleToggle } = props;
  const { startTimeFormatted, endTimeFormatted, type } = userEntry;

  return (
    <EntryRoot>
      <StartTime>{startTimeFormatted}</StartTime>
      <EndTime>{endTimeFormatted}</EndTime>
      <ToggleButtonsContainer
        onClick={() => {
          handleToggle(id);
        }}
      >
        <ActiveToggle>
          <WorkIcon className={type === 'work' ? 'work-active' : ''} />
        </ActiveToggle>
        <ActiveToggle>
          <FastfoodIcon className={type === 'lunch' ? 'lunch-active' : ''} />
        </ActiveToggle>
      </ToggleButtonsContainer>
      <EditButtonsContainer>
        <IconButtonWrapper>
          <IconButton
            className="edit-button"
            size="small"
            onClick={() => {
              handleRemove(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </IconButtonWrapper>
        <IconButtonWrapper>
          <IconButton
            className="edit-button"
            size="small"
            onClick={() => {
              handleEdit(id);
            }}
          >
            <CreateIcon />
          </IconButton>
        </IconButtonWrapper>
      </EditButtonsContainer>
    </EntryRoot>
  );
};

export default Entry;
