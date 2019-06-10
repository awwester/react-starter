import React from 'react';
import { connect } from 'react-redux';

import { showModal } from 'actions/general/modals';

class DashboardHomeRoute extends React.Component {
  componentDidMount() {
    this.props.showModal('welcome');
  }

  render() {
    return (
      <div>
        This is the dashboard home.
      </div>
    )
  }
}

export default connect(null, { showModal })(DashboardHomeRoute);
