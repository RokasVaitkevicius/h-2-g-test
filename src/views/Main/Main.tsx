import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography, Divider } from '@material-ui/core';
import DataDisplay from '../../components/DataDisplay/DataDisplayContainer';

const Main: React.FC = () => (
  <div>
    <Typography variant="h1">MAIN</Typography>
    <DataDisplay />
  </div>
);

export default withRouter(Main);
