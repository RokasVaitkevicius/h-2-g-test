import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import RadioBox from '../RadioBox';
import { makeStyles } from '@material-ui/core/styles';
import { DataComponentProps } from '../../types';
import DataList from '../DataCheckboxList';

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
    listHeader,
    onApiDataClick,
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
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Button
          color="primary"
          disabled={!apiEndpoint}
          variant="contained"
          className={classes.button}
          onClick={() => onButtonClick(apiEndpoint)}
        >
          Pull Data
        </Button>
        <Typography variant="h3">{apiStatus}</Typography>
      </Grid>
      {data && data.length > 0 && (
        <DataList header={listHeader} data={data} onClick={onApiDataClick} />
      )}
    </div>
  );
};

export default DataDisplay;
