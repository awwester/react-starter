import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import RegisterForm from "components/forms/Register";
import FormTitle from "components/forms/Title";

class RegisterRoute extends React.Component {
  render() {
    return (
      <div className="register-route">
        <Container fluid>
          <Row>
            <Col sm={{ span: 4, offset: 4 }}>
              <FormTitle>Register</FormTitle>
              <RegisterForm />
              <div className="text-center">
                Already have account? <Link to="/auth/login">Login</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RegisterRoute;
