import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import ExternalApiComponentPickerDisplay from '../../components/ExternalApiComponentPickerDisplay/ExternalApiComponentPickerContainer';

const Main: React.FC = () => (
  <div>
    <Typography variant="h1">MAIN</Typography>
    <ExternalApiComponentPickerDisplay />
  </div>
);

export default withRouter(Main);
