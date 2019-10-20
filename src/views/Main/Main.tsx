import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Main: React.FC = () => {
  return <Typography variant="h1">MAIN</Typography>;
};

export default withRouter(Main);
