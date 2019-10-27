import React from 'react';
import { Typography, Button, Grid, TextField } from '@material-ui/core';
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
      <Typography variant="h2">Data Display</Typography>
      <RadioBox
        data={apis}
        label="Choose an API"
        onChange={e => onChangeApi(e.target.value)}
        value={apiEndpoint}
      />
      <TextField
        id="standard-multiline-flexible"
        label="Data"
        multiline
        rows="3"
        value={data ? JSON.stringify(data) : ''}
        margin="normal"
        disabled
        fullWidth
      />
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Button
          disabled={!apiEndpoint}
          variant="contained"
          className={classes.button}
          onClick={() => onButtonClick(apiEndpoint)}
        >
          Pull Data
        </Button>
        <Typography variant="h3">{apiStatus}</Typography>
      </Grid>
    </div>
  );
};

export default DataDisplay;
