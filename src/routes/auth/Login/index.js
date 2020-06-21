import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import LoginForm from "components/forms/Login";
import FormTitle from "components/forms/Title";

class LoginRoute extends React.Component {
  render() {
    return (
      <div className="login-route">
        <Container fluid>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <FormTitle>Login</FormTitle>
              <LoginForm />
              <div className="text-center">
                New user? <Link to="/auth/register">Register</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginRoute;
