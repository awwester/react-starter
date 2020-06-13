import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "reactstrap";

export default function RegisterForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />

      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
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
