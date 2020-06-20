import React from "react";
import { FormGroup, FormFeedback, Input, Label } from "reactstrap";
import PropTypes from "prop-types";

export default function CustomFormGroup({
  name,
  error,
  label,
  inputProps = {},
}) {
  // Default form group to be reused.
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        {...inputProps}
        name={name}
        invalid={error && "message" in error}
      />
      <FormFeedback>{error && error.message}</FormFeedback>
    </FormGroup>
  );
}

CustomFormGroup.propTypes = {
  // name property of the input element
  name: PropTypes.string.isRequired,
  // form label to be shown with the input
  label: PropTypes.string.isRequired,
  // error object for the input
  error: PropTypes.object,
  // properties to be passed to the input component
  inputProps: PropTypes.object,
};

CustomFormGroup.defaultPropTypes = {
  inputProps: {},
};
