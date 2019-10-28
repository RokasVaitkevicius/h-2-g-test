import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import MainPage from '../../containers/MainPageLayout/MainPage';

const Main: React.FC = () => (
  <React.Fragment>
    <Typography variant="h1">MAIN</Typography>
    <MainPage />
  </React.Fragment>
);

export default withRouter(Main);
