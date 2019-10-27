import React from 'react';
import { Button } from '@material-ui/core';
import { DataButtonProps } from '../types';

const DataButton: React.FC<DataButtonProps> = props => {
  const { disabled, onClick, buttonText } = props;
  return (
    <Button
      color="primary"
      disabled={disabled}
      variant="contained"
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default DataButton;
