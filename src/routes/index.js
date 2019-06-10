import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingRoute from './general/Landing';
import AuthRouter from './auth';
import DashboardRouter from './dashboard';

class Router extends React.Component {
  // main router for the whole application
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingRoute} />
        <Route path="/auth" component={AuthRouter} />
        <Route path="/dashboard" component={DashboardRouter} />
      </Switch>
    );
  }
}


export default Router;
