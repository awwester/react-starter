import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import FormGroup from "components/forms/FormGroup";
import ButtonContainer from "components/forms/ButtonContainer";
import FormGeneralError from "components/forms/GeneralError";
import loginUser, { LOGIN_SUCCESS } from "actions/auth/login";

export default function LoginForm() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { isSubmitting } = formState;
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      clearError();
      const action = await dispatch(loginUser(data));
      if (action.type === LOGIN_SUCCESS) {
        history.push("/dashboard/");
      } else {
        let errorMessage =
          (action.data && action.data.detail) || "Unable to login";
        setError("form", "general", errorMessage);
      }
    } catch (error) {
      setError("form", "general", "Unable to login at this time.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <FormGroup
        name="username"
        label="Username"
        error={errors.username}
        inputProps={{
          innerRef: register({ required: "username is required" }),
        }}
      />
      <FormGroup
        name="password"
        label="Password"
        error={errors.password}
        inputProps={{
          innerRef: register({ required: "password is required" }),
          type: "password",
          autoComplete: "password",
        }}
      />
      <FormGeneralError error={errors.form} />
      <ButtonContainer isSubmitting={isSubmitting}>Login</ButtonContainer>
    </Form>
  );
}
