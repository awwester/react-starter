import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { fetchMe } from 'actions/users/current/fetch';

class DashboardHomeRoute extends React.Component {
  render() {
    return (
      <div>
        <p>This is the dashboard home.</p>
        <Button onClick={this.props.fetchMe}>Get user data</Button>
      </div>
    )
  }
}

export default connect(null, { fetchMe })(DashboardHomeRoute);
