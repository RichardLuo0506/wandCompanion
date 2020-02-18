import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default function MyTextFieldTimePicker(props) {
  const { label, defaultValue } = props;
  const classes = useStyles();

  return (
    <TextField
      label={label}
      type="time"
      defaultValue={defaultValue}
      className={classes.textField}
      InputLabelProps={{
        shrink: true
      }}
      inputProps={{
        step: 300 // 5 min
      }}
    />
  );
}
const useStyles = makeStyles(() => ({
  textField: {
    width: `100px`,
    margin: 16
  }
}));
