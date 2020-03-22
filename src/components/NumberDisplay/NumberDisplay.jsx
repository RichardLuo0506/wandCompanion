import React from 'react';
import {
  NumberDisplayRoot,
  Label,
  NumberWrapper,
  Sign,
  Number,
  Unit
} from './styled-components';

import { color as themeColor } from '../theme';

const NumberDisplay = props => {
  const { color, timeDiff, inline } = props;
  const { sign, hour, minute, unit, unit2 } = getNumDisplay(timeDiff);
  const hoverColor = timeDiff > 0 ? color : themeColor.red;
  return (
    // TODO: Is there better (DRY) way of passing prop "inline" to styled components?
    <NumberDisplayRoot inline={inline}>
      <Label inline={inline}>Total</Label>
      <NumberWrapper style={{ color: hoverColor }}>
        {sign ? <Sign inline={inline}>{sign}</Sign> : ''}
        {hour ? <Number inline={inline}>{hour}</Number> : ''}
        {unit ? <Unit inline={inline}>{unit}</Unit> : ''}
        {minute ? <Number inline={inline}>{minute}</Number> : ''}
        {unit2 ? <Unit inline={inline}>{unit2}</Unit> : ''}
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
