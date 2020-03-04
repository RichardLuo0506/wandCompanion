import React from 'react';
import {
  NumberDisplayRoot,
  Label,
  NumberWrapper,
  Sign,
  Number,
  Unit
} from './styled-components';

import { color as themeColor } from '../../common-styled-components';
// import PropTypes from 'prop-types';

const NumberDisplay = props => {
  const { color, timeDiff } = props;
  const { sign, hour, minute, unit, unit2 } = getNumDisplay(timeDiff);
  const hoverColor = timeDiff > 0 ? color : themeColor.red;
  return (
    <NumberDisplayRoot>
      <Label>Total</Label>
      <NumberWrapper style={{ color: hoverColor }}>
        {sign ? <Sign>{sign}</Sign> : ''}
        {hour ? <Number>{hour}</Number> : ''}
        {unit ? <Unit>{unit}</Unit> : ''}
        {minute ? <Number>{minute}</Number> : ''}
        {unit2 ? <Unit>{unit2}</Unit> : ''}
      </NumberWrapper>
    </NumberDisplayRoot>
  );

  function getNumDisplay(timeDiff) {
    if (timeDiff === 0) {
      return { hour: 0 };
    }

    const sign = timeDiff > 0 ? '+' : '-';
    const absoluteDiff = Math.abs(timeDiff);
    if (absoluteDiff < 60) {
      return { sign: sign, minute: absoluteDiff, unit2: 'min' };
    } else {
      const hour = Math.floor(absoluteDiff / 60);
      const minute = absoluteDiff % 60;
      return {
        sign: sign,
        hour: hour,
        unit: 'hr',
        minute: minute,
        unit2: minute ? 'min' : ''
      };
    }
  }
};

export default NumberDisplay;

// NumberDisplay.propTypes = {
//   color: PropTypes.string,
//   sign: PropTypes.string,
//   hour: PropTypes.number,
//   minute: PropTypes.number,
//   unit: PropTypes.string,
//   unit2: PropTypes.string
// };
