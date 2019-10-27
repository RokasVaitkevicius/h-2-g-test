import React from 'react';
import { Typography, Button } from '@material-ui/core';
import RadioBox from '../RadioBox';
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
  const {
    data,
    onButtonClick,
    apiStatus,
    apis,
    onChangeApi,
    apiEndpoint,
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h1">Data</Typography>
      <Button
        disabled={!apiEndpoint}
        variant="contained"
        className={classes.button}
        onClick={() => onButtonClick(apiEndpoint)}
      >
        Pull Data
      </Button>
      <Typography variant="h2">{apiStatus}</Typography>
      <RadioBox
        data={apis}
        label="Choose an API"
        onChange={e => onChangeApi(e.target.value)}
        value={apiEndpoint}
      />

      {data && <Typography variant="h1">{JSON.stringify(data)}</Typography>}
    </div>
  );
};

export default DataDisplay;
