import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DataComponentProps } from '../../types';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const DataDisplay: React.FC<DataComponentProps> = props => {
  const { data, onButtonClick, header, apiStatus } = props;
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1">{header}</Typography>
      <Button
        variant="contained"
        className={classes.button}
        onClick={onButtonClick}
      >
        Default
      </Button>
      <Typography variant="h2">{apiStatus}</Typography>
      {data && <Typography variant="h1">{data}</Typography>}
    </div>
  );
};

export default DataDisplay;
