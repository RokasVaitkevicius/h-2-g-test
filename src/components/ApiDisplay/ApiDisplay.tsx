import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ApiDisplay: React.FC = props => {
  const { data, onButtonClick }: { data: string; onButtonClick: any } = props;
  const classes = useStyles();

  // const data: string = props.data;
  // const onButtonClick = props.onButtonClick;

  return (
    <div>
      <Typography variant="h1">Post</Typography>
      <Button
        variant="contained"
        className={classes.button}
        onClick={onButtonClick}
      >
        Default
      </Button>
      {data && <Typography variant="h1">{data}</Typography>}
    </div>
  );
};

export default ApiDisplay;
