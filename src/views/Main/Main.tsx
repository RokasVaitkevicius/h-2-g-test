import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import DataDisplay from '../../components/ExternalApiDataDisplay/ExternalApiDataDisplayContainer';

const Main: React.FC = () => (
  <div>
    <Typography variant="h1">MAIN</Typography>
    <DataDisplay />
  </div>
);

export default withRouter(Main);
