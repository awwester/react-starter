import React from 'react';
import { withFormik, Field } from 'formik';
import { withRouter } from 'react-router-dom';
import { Form, Button, FormGroup, Input, FormFeedback, FormText
       } from 'reactstrap';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import LoadButton from 'components/buttons/LoadButton';
import loginUser, { LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/auth/login';

const LoginForm = props => {
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
          name="password"
          tag={Field}
          invalid={errors.password && touched.password}
          autoComplete="password"
        />
        <FormFeedback>{errors.password}</FormFeedback>
      </FormGroup>

      <FormText color="danger" className="text-center mb-3">
        {status ? status.error : ''}
      </FormText>

      <div className="button-container text-right">
        <Button color="link">Cancel</Button>
        <LoadButton
          color="primary"
          type="submit"
          disabled={isSubmitting}
          width={100}
          isLoading={isSubmitting}
        >
          Login
        </LoadButton>
      </div>
    </Form>
  );
}

const FormikForm = withFormik({
  mapPropsToValues: props => ({
    username: '',
    password: ''
  }),

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit: (values, { props, setSubmitting, setStatus }) => {
    props.loginUser(values).then(action => {
      setSubmitting(false);
      if (action.type === LOGIN_FAILURE) {
        setStatus({ error: 'Unable to login with the provided credentials.'});
      } else if (action.type === LOGIN_SUCCESS) {
        props.history.push('/dashboard/home');
      }
    });
  },
})(LoginForm);

export default withRouter(connect(null, { loginUser })(FormikForm));
