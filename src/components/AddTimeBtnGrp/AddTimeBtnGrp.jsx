import React from 'react';
import { GroupContainer, AddWorkBtn } from './styled-components';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WorkIcon from '@material-ui/icons/Work';

export default class AddTimeBtnGrp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GroupContainer>
        <AddWorkBtn color="primary" startIcon={<FastfoodIcon />}>
          Add Lunch
        </AddWorkBtn>
        <AddWorkBtn color="secondary" endIcon={<WorkIcon />}>
          Add Work
        </AddWorkBtn>
      </GroupContainer>
    );
  }
}
