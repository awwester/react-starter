import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LoginForm from 'components/forms/Login';

class LoginRoute extends React.Component {
  render() {
    return (
      <div className="login-route">
        <Container>
          <Row>
            <Col sm={{size: 4, offset: 4}}>
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginRoute;
