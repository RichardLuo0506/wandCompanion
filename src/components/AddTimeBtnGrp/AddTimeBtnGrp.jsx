import React from 'react';
import { AddTimeBtnRoot, AddWorkBtn } from './styled-components';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WorkIcon from '@material-ui/icons/Work';

const AddTimeBtnGrp = props => {
  const { onHover, onAddEntry: addEntry, disabled } = props;

  return (
    <AddTimeBtnRoot>
      <AddWorkBtn
        onMouseOver={() => onHover('work')}
        onMouseOut={() => onHover('')}
        onClick={() => addEntry('work')}
        color="secondary"
        startIcon={<WorkIcon />}
        disabled={disabled}
      >
        Add Work
      </AddWorkBtn>
      <AddWorkBtn
        onMouseOver={() => onHover('lunch')}
        onMouseOut={() => onHover('')}
        onClick={() => addEntry('lunch')}
        color="primary"
        endIcon={<FastfoodIcon />}
        disabled={disabled}
      >
        Add Lunch
      </AddWorkBtn>
    </AddTimeBtnRoot>
  );
};

export default AddTimeBtnGrp;
