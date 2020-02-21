import React from 'react';
import { GroupRoot, AddWorkBtn } from './styled-components';
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
      <GroupRoot>
        <AddWorkBtn
          onMouseOver={() => onHover('lunch')}
          onMouseOut={() => onHover('')}
          color="primary"
          startIcon={<FastfoodIcon />}
        >
          Add Lunch
        </AddWorkBtn>
        <AddWorkBtn
          onMouseOver={() => onHover('work')}
          onMouseOut={() => onHover('')}
          color="secondary"
          endIcon={<WorkIcon />}
        >
          Add Work
        </AddWorkBtn>
      </GroupRoot>
    );
  }
}

AddTimeBtnGrp.propTypes = {
  onHover: PropTypes.func
};
