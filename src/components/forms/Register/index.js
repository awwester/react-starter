import React from 'react';
import { withFormik, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import { Form, Button, FormGroup, Input, FormFeedback, FormText
       } from 'reactstrap';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import registerUser, { REGISTER_SUCCESS, REGISTER_FAILURE } from 'actions/auth/register';

const RegisterForm = props => {
  const {
    touched,
    errors,
    isSubmitting,
    handleSubmit,
    status
  } = props;

  return (
    <Form onSubmit={handleSubmit} className="p-4">
      <FormGroup>
        <Input
          placeholder="First Name"
          name="firstName"
          tag={Field}
          invalid={errors.firstName && touched.firstName}
        />
        <FormFeedback>{errors.firstName}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Last Name"
          name="lastName"
          tag={Field}
          invalid={errors.lastName && touched.lastName}
        />
        <FormFeedback>{errors.lastName}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Email"
          name="email"
          tag={Field}
          invalid={errors.email && touched.email}
        />
        <FormFeedback>{errors.email}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="username"
          name="username"
          tag={Field}
          invalid={errors.username && touched.username}
        />
        <FormFeedback>{errors.username}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Input
          type="password"
          placeholder="password"
          name="password1"
          tag={Field}
          invalid={errors.password1 && touched.password1}
          autoComplete="password"
        />
        <FormFeedback>{errors.password1}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Input
          type="password"
          placeholder="password (repeat)"
          name="password2"
          tag={Field}
          invalid={errors.password2 && touched.password2}
          autoComplete="password"
        />
        <FormFeedback>{errors.password2}</FormFeedback>
      </FormGroup>

      <FormText color="danger" className="text-center mb-3">
        {status ? status.error : ''}
      </FormText>

      <div className="button-container text-right">
        <Button color="link">Cancel</Button>
        <Button color="primary" type="submit" disabled={isSubmitting}>
          Register
        </Button>
      </div>
    </Form>
  );
}

const FormikForm = withFormik({
  mapPropsToValues: props => ({
    username: '',
    password1: '',
    password2: '',
    firstName: '',
    lastName: '',
    email: ''
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().required().email('Invalid email'),
    username: Yup.string().required(),
    firstName: Yup.string().required('First name is a required field'),
    password1: Yup.string().required(),
    password2: Yup.string().required(),
  }),

  handleSubmit: (values, { props, setSubmitting, setStatus }) => {
    props.registerUser(values).then(action => {
      setSubmitting(false);
      if (action.type === REGISTER_FAILURE) {
        setStatus({ error: 'Unable to register with the provided data.'});
      } else if (action.type === REGISTER_SUCCESS) {
        props.history.push('/dashboard/home');
      }
    });
  },
})(RegisterForm);

export default withRouter(connect(null, { registerUser })(FormikForm));
