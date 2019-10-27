import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import RadioBox from '../RadioBox';
import { DataDisplayProps } from '../../types';
import DataList from '../DataCheckboxList';
import Inidcator from '../Indicator';
import DataButton from '../DataButton';

const ExternalApiDataDisplay: React.FC<DataDisplayProps> = props => {
  const {
    apiData,
    onButtonClick,
    apiStatus,
    apis,
    onChangeApi,
    apiEndpoint,
    apiDataHeader,
    onApiDataClick,
    buttonText,
    radioLabel,
  } = props;

  return (
    <div>
      <Typography variant="h2">External Api Data Display</Typography>
      <RadioBox
        data={apis}
        label={radioLabel}
        onChange={e => onChangeApi(e.target.value)}
        value={apiEndpoint}
      />
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <DataButton
          disabled={!apiEndpoint}
          onClick={() => onButtonClick(apiEndpoint)}
          buttonText={buttonText}
        />
        <Inidcator apiStatus={apiStatus} />
      </Grid>
      <DataList
        header={apiDataHeader}
        data={apiData}
        onClick={onApiDataClick}
      />
    </div>
  );
};

export default ExternalApiDataDisplay;
