import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { MainScreen } from './views';

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/main" />
    <Route component={MainScreen} path="/main" />
  </Switch>
);

export default Routes;
