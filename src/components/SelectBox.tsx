import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { SelectBoxProps, SelectBoxItem } from '../types';

const SelectBox = (props: SelectBoxProps) => {
  const { options, handleChange, value } = props;

  return (
    <FormControl>
      <InputLabel shrink htmlFor="select-multiple-native">
        Native
      </InputLabel>
      <Select
        multiple
        native
        value={value}
        onChange={handleChange}
        inputProps={{
          id: 'select-multiple-native',
        }}
      >
        {options.map((o: SelectBoxItem) => (
          <option key={o.name} value={o.name}>
            {o.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
