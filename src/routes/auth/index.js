import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginRoute from './Login';
import RegisterRoute from './Register';

class AuthRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/auth/login" component={LoginRoute} />
        <Route path="/auth/register" component={RegisterRoute} />
      </Switch>
    );
  }
}


export default AuthRouter;
