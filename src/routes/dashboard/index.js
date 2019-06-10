import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardHomeRoute from './Home';

class DashboardRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={DashboardHomeRoute} />
      </Switch>
    );
  }
}


export default DashboardRouter;
