import React from 'react';
import { GroupContainer, AddWorkBtn } from './styled-components';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WorkIcon from '@material-ui/icons/Work';
import PropTypes from 'prop-types';

export default class AddTimeBtnGrp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onHover } = this.props;
    return (
      <GroupContainer>
        <AddWorkBtn
          onMouseOver={() => onHover('lunch')}
          color="primary"
          startIcon={<FastfoodIcon />}
        >
          Add Lunch
        </AddWorkBtn>
        <AddWorkBtn
          onMouseOver={() => onHover('work')}
          color="secondary"
          endIcon={<WorkIcon />}
        >
          Add Work
        </AddWorkBtn>
      </GroupContainer>
    );
  }
}

AddTimeBtnGrp.propTypes = {
  onHover: PropTypes.func
};
