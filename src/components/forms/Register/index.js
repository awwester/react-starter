import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";

import FormGroup from 'components/forms/FormGroup';
import FormGeneralError from 'components/forms/GeneralError';
import ButtonContainer from 'components/forms/ButtonContainer';

export default function RegisterForm() {
  const { register, handleSubmit, errors, formState } = useForm({
    defaultValues: {
      username: '',
      password1: '',
      password2: '',
      firstName: '',
      lastName: '',
      email: '',
    }
  });
  const { isSubmitting } = formState;

  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <FormGroup
        name="username"
        label="Username"
        error={errors.username}
        innerRef={register({required: "username is required"})}
      />
      <FormGroup
        name="email"
        label="Email"
        error={errors.email}
        innerRef={register({required: "email is required"})}
      />
      <FormGroup
        name="firstName"
        label="First name"
        error={errors.firstName}
        innerRef={register({required: "first name is required"})}
      />
      <FormGroup
        name="lastName"
        label="Last name"
        error={errors.lastName}
        innerRef={register}
      />
      <FormGeneralError error={errors.form && errors.form.message} />
      <ButtonContainer isSubmitting={isSubmitting}>Register</ButtonContainer>
    </Form>
  );
}

// const FormikForm = withFormik({
//   mapPropsToValues: props => ({
//     username: '',
//     password1: '',
//     password2: '',
//     firstName: '',
//     lastName: '',
//     email: ''
//   }),

//   validationSchema: Yup.object().shape({
//     email: Yup.string().required().email('Invalid email'),
//     username: Yup.string().required(),
//     firstName: Yup.string().required('First name is a required field'),
//     password1: Yup.string().required(),
//     password2: Yup.string().required(),
//   }),

//   handleSubmit: (values, { props, setSubmitting, setStatus }) => {
//     props.registerUser(values).then(action => {
//       setSubmitting(false);
//       if (action.type === REGISTER_FAILURE) {
//         setStatus({ error: 'Unable to register with the provided data.'});
//       } else if (action.type === REGISTER_SUCCESS) {
//         props.history.push('/dashboard/home');
//       }
//     });
//   },
// })(RegisterForm);

// export default withRouter(connect(null, { registerUser })(FormikForm));
