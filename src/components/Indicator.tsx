import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IndicatorProps } from '../types';

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

const Indicator: React.FC<IndicatorProps> = props => {
  const classes = useStyles();
  const { apiStatus } = props;
  return (
    <Typography variant="h3" className={classes[apiStatus]}>
      {apiStatus}
    </Typography>
  );
};

export default Indicator;
