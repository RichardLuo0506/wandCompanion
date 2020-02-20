import React from 'react';
import {
  NumberDisplayWrapper,
  Label,
  NumberWrapper,
  Symbol,
  Number,
  Unit
} from './styled-components';
import PropTypes from 'prop-types';

export default class NumberDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color, symbol, number, unit } = this.props;
    return (
      <NumberDisplayWrapper>
        <Label>Total</Label>
        <NumberWrapper style={{ color }}>
          <Symbol>{symbol}</Symbol>
          <Number>{number}</Number>
          <Unit>{unit}</Unit>
        </NumberWrapper>
      </NumberDisplayWrapper>
    );
  }
}

NumberDisplay.propTypes = {
  color: PropTypes.string,
  symbol: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string
};
