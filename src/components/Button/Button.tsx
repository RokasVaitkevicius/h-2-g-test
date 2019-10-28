import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonProps as Props } from './types';

const CustomButton: React.FC<Props> = ({ disabled, onClick, buttonText }) => (
  <Button
    color="primary"
    disabled={disabled}
    variant="contained"
    onClick={onClick}
  >
    {buttonText}
  </Button>
);

export default CustomButton;
