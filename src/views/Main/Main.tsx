import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import PostsApi from '../../components/DataDisplay/DataDisplayContainer';

const Main: React.FC = () => (
  <div>
    <Typography variant="h1">MAIN</Typography>
    <PostsApi />
  </div>
);

export default withRouter(Main);
