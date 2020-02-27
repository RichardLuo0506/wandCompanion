import React from 'react';
import {
  NumberDisplayRoot,
  Label,
  NumberWrapper,
  Sign,
  Number,
  Unit
} from './styled-components';
import PropTypes from 'prop-types';

export default class NumberDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, sign, hour, minute, unit, unit2 } = this.props;
    return (
      <NumberDisplayRoot>
        <Label>Total</Label>
        <NumberWrapper style={{ color }}>
          <Sign>{sign}</Sign>
          <Number>{hour}</Number>
          <Unit>{unit}</Unit>
          <Number>{minute}</Number>
          <Unit>{unit2}</Unit>
        </NumberWrapper>
      </NumberDisplayRoot>
    );
  }
}

NumberDisplay.propTypes = {
  color: PropTypes.string,
  sign: PropTypes.string,
  hour: PropTypes.number,
  minute: PropTypes.number,
  unit: PropTypes.string,
  unit2: PropTypes.string
};
