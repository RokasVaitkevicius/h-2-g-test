import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import { RadioBoxProps as Props } from './types';

const RadioBox: React.FC<Props> = ({ data, onChange, label, value }) => (
  <FormControl component="fieldset">
    {label && <FormLabel component="legend">{label}</FormLabel>}
    <RadioGroup value={value} onChange={onChange}>
      {data &&
        data.map(({ label, value }) => (
          <FormControlLabel
            key={label}
            value={value}
            control={<Radio />}
            label={label}
          />
        ))}
    </RadioGroup>
  </FormControl>
);

export default RadioBox;
