import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import RegisterForm from 'components/forms/Register';

class RegisterRoute extends React.Component {
  render() {
    return (
      <div className="register-route">
        <Container>
          <Row>
            <Col sm={{size: 4, offset: 4}}>
              <RegisterForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RegisterRoute;
