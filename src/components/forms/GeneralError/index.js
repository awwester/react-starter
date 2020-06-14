import React from 'react';
import { FormText } from 'reactstrap';
import PropTypes from 'prop-types';


export default function FormGeneralError({ error }) {
  // Separates the button from the form with a section to display general form error.
  return (
    <FormText color="danger" className="text-center m-2">
      {error && error.message}
    </FormText>
  )
}

FormGeneralError.propTypes = {
  error: PropTypes.object,
}
