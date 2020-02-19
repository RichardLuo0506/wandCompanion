import React, { useState } from 'react';
import { KeyboardTimePicker } from '@material-ui/pickers';

export default function MyKeyboardTimePicker(props) {
  const { label, date, placeholder } = props;
  const [selectedDate, handleDateChange] = useState(date);

  return (
    <KeyboardTimePicker
      label={label}
      placeholder={placeholder}
      mask="__:__ _M"
      value={selectedDate}
      onChange={date => handleDateChange(date)}
    />
  );
}
