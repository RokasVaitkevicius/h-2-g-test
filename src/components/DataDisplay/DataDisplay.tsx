import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import RadioBox from '../RadioBox';
import { makeStyles } from '@material-ui/core/styles';
import { DataComponentProps } from '../../types';
import DataList from '../DataCheckboxList';
import Inidcator from '../Indicator';
import DataButton from '../DataButton';

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
        <DataButton
          disabled={!apiEndpoint}
          onClick={() => onButtonClick(apiEndpoint)}
          buttonText="Pull data"
        />
        <Inidcator apiStatus={apiStatus} />
      </Grid>
      <DataList header={listHeader} data={data} onClick={onApiDataClick} />
    </div>
  );
};

export default DataDisplay;
