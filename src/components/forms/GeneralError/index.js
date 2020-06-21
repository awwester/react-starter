import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const { Text } = Form;

export default function FormGeneralError({ error }) {
  // Separates the button from the form with a section to display general form error.
  return (
    <Text className="text-center m-2 text-danger">
      {error && error.message}
    </Text>
  );
}

FormGeneralError.propTypes = {
  error: PropTypes.object,
};
