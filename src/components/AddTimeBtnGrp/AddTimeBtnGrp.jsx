import React from 'react';
import { AddTimeBtnRoot, AddWorkBtn } from './styled-components';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WorkIcon from '@material-ui/icons/Work';

const AddTimeBtnGrp = props => {
  const { onHover, onAddEntry: addEntry } = props;

  return (
    <AddTimeBtnRoot>
      <AddWorkBtn
        onMouseOver={() => onHover('lunch')}
        onMouseOut={() => onHover('')}
        onClick={() => addEntry('lunch')}
        color="primary"
        startIcon={<FastfoodIcon />}
      >
        Add Lunch
      </AddWorkBtn>
      <AddWorkBtn
        onMouseOver={() => onHover('work')}
        onMouseOut={() => onHover('')}
        onClick={() => addEntry('work')}
        color="secondary"
        endIcon={<WorkIcon />}
      >
        Add Work
      </AddWorkBtn>
    </AddTimeBtnRoot>
  );
};

export default AddTimeBtnGrp;
