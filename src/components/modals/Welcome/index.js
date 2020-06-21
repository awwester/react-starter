import React from "react";
import { Modal, Button } from "react-bootstrap";

const { Header, Body, Footer } = Modal;

class WelcomeModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} className="welcome-modal">
        <Header>Welcome to the dashboard</Header>
        <Body>Just providing an example.</Body>
        <Footer>
          <Button color="link" onClick={this.props.toggle}>
            Close
          </Button>
          <Button color="primary" onClick={this.props.toggle}>
            OK
          </Button>
        </Footer>
      </Modal>
    );
  }
}

export default WelcomeModal;
