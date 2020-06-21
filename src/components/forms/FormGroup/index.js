import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const { Control, Text, Label, Group } = Form;

export default function CustomGroup({ name, error, label, inputProps = {} }) {
  // Default form group to be reused.
  return (
    <Group>
      <Label for={name}>{label}</Label>
      <Control
        {...inputProps}
        name={name}
        invalid={error && "message" in error}
      />
      <Text className="text-danger">{error && error.message}</Text>
    </Group>
  );
}

CustomGroup.propTypes = {
  // name property of the Control element
  name: PropTypes.string.isRequired,
  // form label to be shown with the Control
  label: PropTypes.string.isRequired,
  // error object for the Control
  error: PropTypes.object,
  // properties to be passed to the Control component
  inputProps: PropTypes.object,
};

CustomGroup.defaultPropTypes = {
  inputProps: {},
};
