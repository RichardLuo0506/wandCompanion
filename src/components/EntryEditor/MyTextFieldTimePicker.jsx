import React, { useCallback } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const MyTextFieldTimePicker = props => {
  const { id, label, value, onChange } = props;
  const classes = useStyles();

  const memoOnChange = useCallback(e => {
    onChange(id, e.target.value);
  }, []);

  return (
    <TextField
      label={label}
      type="time"
      value={value}
      className={classes.textField}
      onChange={memoOnChange}
      InputLabelProps={{
        shrink: true
      }}
      inputProps={{
        step: 300 // 5 min
      }}
    />
  );
};

const useStyles = makeStyles(() => ({
  textField: {
    width: `100px`,
    margin: `16px`,
    '&:first-child': {
      marginRight: 0
    }
  }
}));

export default React.memo(MyTextFieldTimePicker);
