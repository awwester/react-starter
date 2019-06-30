import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchMe, FETCH_ME_FAILURE } from 'actions/users/current/fetch';
import { refreshToken, REFRESH_TOKEN_SUCCESS } from 'actions/auth/refreshToken';
import { logoutUser } from 'actions/auth/logout';
import Router from 'routes';
import ModalContainer from 'components/modals/Container';
import 'styles/app.scss';

class App extends React.Component {
  async componentDidMount() {
    const { session, fetchMe, logoutUser } = this.props;
    if (session.token) {
      const refreshAction = await this.props.refreshToken(session.token);

      if (refreshAction.type === REFRESH_TOKEN_SUCCESS) {
        axios.defaults.headers.common.Authorization = `JWT ${refreshAction.data.token}`;
        const fetchMeAction = await fetchMe();
        if (fetchMeAction.type === FETCH_ME_FAILURE) logoutUser();
      } else {
        logoutUser();
      }
    }
  }

  render() {
    return (
      <div className="app">
        <ModalContainer />
        <ToastContainer
          closeButton={false}
          position="bottom-right"
          className="toast-body"
          hideProgressBar
          autoClose={3000}
        />
        <Router />
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => ({ session });
export default connect(mapStateToProps, { fetchMe, refreshToken, logoutUser })(App);
