import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { SelectBoxProps as Props, SelectBoxItem } from './types';

const SelectBox: React.FC<Props> = ({ options, onChange, value, label }) => (
  <FormControl>
    <InputLabel shrink htmlFor="select-multiple">
      {label}
    </InputLabel>
    <Select
      multiple
      native
      value={value}
      onChange={onChange}
      inputProps={{
        id: 'select-multiple',
      }}
    >
      {options.map(({ name }: SelectBoxItem) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </Select>
  </FormControl>
);

export default SelectBox;
