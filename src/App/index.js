import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchMe, { FETCH_ME_FAILURE } from 'actions/users/current/fetch';
import logoutUser from 'actions/auth/logout';
import Router from 'routes';
import ModalContainer from 'components/modals/Container';
import 'styles/app.scss';

class App extends React.Component {
  componentDidMount() {
    const { session, fetchMe, logoutUser } = this.props;
    if (session.token) {
      axios.defaults.headers.common.Authorization = `Token ${session.token}`;
      fetchMe().then((action) => {
        if (action.type === FETCH_ME_FAILURE) logoutUser();
      });
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
export default connect(mapStateToProps, { fetchMe, logoutUser })(App);
