import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { RadioBoxProps } from 'types';

const RadioBox: React.FC<RadioBoxProps> = props => {
  const { data, onChange, label, value } = props;
  return (
    <FormControl component="fieldset">
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <RadioGroup value={value} onChange={e => onChange(e)}>
        {data &&
          data.length > 0 &&
          data.map(d => (
            <FormControlLabel
              key={d.label}
              value={d.value}
              control={<Radio />}
              label={d.label}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBox;
