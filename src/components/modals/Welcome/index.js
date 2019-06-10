import React from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';


class WelcomeModal extends React.Component {
  render() {
    return (
      <Modal { ...this.props } className="welcome-modal">
        <ModalHeader>
          Welcome to the dashboard
        </ModalHeader>
        <ModalBody>
          Just providing an example.
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={this.props.toggle}>Close</Button>
          <Button color="primary" onClick={this.props.toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default WelcomeModal;
