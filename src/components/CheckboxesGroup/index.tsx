import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const CheckboxesGroup = props => {
  const classes = useStyles();
  const { data, header, dataSelectedCount, onChange } = props;

  return (
    <div>
      <Typography variant="h2">
        {header} {dataSelectedCount}
      </Typography>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormGroup>
            {data &&
              data.length > 0 &&
              data.map(d => (
                <FormControlLabel
                  key={d.id}
                  control={
                    <Checkbox
                      checked={d.isChecked}
                      onChange={() => onChange(d.id)}
                      value={d.value}
                    />
                  }
                  label={d.label}
                />
              ))}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default CheckboxesGroup;
