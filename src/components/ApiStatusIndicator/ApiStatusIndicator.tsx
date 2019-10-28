import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IndicatorProps as Props } from './types';

const useStyles = makeStyles(() =>
  createStyles({
    IDLE: {
      color: 'orange',
    },
    LOADING: {
      color: 'blue',
    },
    DONE: {
      color: 'green',
    },
    ERROR: {
      color: 'red',
    },
  })
);

const ApiStatusIndicator: React.FC<Props> = ({ apiStatus }) => {
  const classes = useStyles();
  return (
    <Typography variant="h3" className={classes[apiStatus]}>
      {apiStatus}
    </Typography>
  );
};

export default ApiStatusIndicator;
