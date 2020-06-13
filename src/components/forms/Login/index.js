import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Form, FormGroup, FormFeedback, FormText } from "reactstrap";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoadButton from 'components/buttons/LoadButton';
import loginUser, { LOGIN_SUCCESS } from 'actions/auth/login';

export default function LoginForm() {
  const history = useHistory();
  const { register, handleSubmit, errors, setError, clearError, formState } = useForm({
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const { isSubmitting } = formState;
  const dispatch = useDispatch();
  const onSubmit = async data => {
    try {
      clearError();
      const action = await dispatch(loginUser(data));
      if (action.type === LOGIN_SUCCESS) {
        history.push('/dashboard/');
      } else {
        let errorMessage = (action.data && action.data.detail) || "Unable to login";
        setError("form", "general", errorMessage);
      }
    } catch(error) {
      console.log('general error...', error);
      setError("form", "general", "Unable to login at this time.");
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <FormGroup>
        <Input
          innerRef={register({required: "username is required"})}
          placeholder="username"
          name="username"
          invalid={errors.username}
        />
        <FormFeedback>{errors.username && errors.username.message}</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Input
          innerRef={register({required: "password is required"})}
          type="password"
          placeholder="password"
          name="password"
          autoComplete="password"
          invalid={errors.password}
        />
        <FormFeedback>{errors.password && errors.password.message}</FormFeedback>
      </FormGroup>

      <FormText color="danger" className="text-center mb-3">
        {errors.form && errors.form.message}
      </FormText>

      <div className="text-right">
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
};
