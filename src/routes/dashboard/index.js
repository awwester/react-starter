import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog, faDollarSign, faLock, faChartLine } from '@fortawesome/free-solid-svg-icons';

import logoutUser from 'actions/auth/logout';
import HomeRoute from './Home';
import OtherRoute from './Other';
import './style.scss';

class DashboardRouter extends React.Component {
  componentDidMount() {
    // Require authentication for the dashboard.
    if (!this.props.session.token) this.props.history.push('/');
  }

  logout = () => {
    this.props.logoutUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="dashboard-route">
        <section className="sidenav-section">
          <div className="dashboard-header text-center my-3">
            <FontAwesomeIcon icon={faFrog} size="4x" />
          </div>
          <nav className="sidenav">
            <section className="menu-section">
            <NavLink exact to="/dashboard/home">
              <FontAwesomeIcon icon={faChartLine} /> Home
            </NavLink>
            <NavLink exact to="/dashboard/other">
                <FontAwesomeIcon icon={faDollarSign} /> Other
              </NavLink>
              <Link to="/" onClick={this.logout}>
                <FontAwesomeIcon icon={faLock} /> Logout
              </Link>
            </section>
          </nav>
        </section>

        <section className="sidenav-layout-content">
          <Switch>
            <Route exact path="/dashboard/home" component={HomeRoute} />
            <Route exact path="/dashboard/other" component={OtherRoute} />
          </Switch>
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({ session });
export default connect(mapStateToProps, { logoutUser })(DashboardRouter);
