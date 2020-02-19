import React from 'react';
import {
  NumberDisplayContainer,
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
    const { color } = this.props;
    return (
      <NumberDisplayContainer>
        <Label>Total</Label>
        <NumberWrapper style={{ color }}>
          <Symbol> + </Symbol>
          <Number>45</Number>
          <Unit>min</Unit>
        </NumberWrapper>
      </NumberDisplayContainer>
    );
  }
}

NumberDisplay.propTypes = {
  color: PropTypes.string
};
