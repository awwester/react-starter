import React from 'react';
import PropTypes from 'prop-types';

import LoadButton from 'components/buttons/LoadButton';

export default function ButtonContainer({ isSubmitting, ...rest }) {
  return (
    <div className="text-right mt-3">
      <LoadButton
        color="primary"
        type="submit"
        disabled={isSubmitting}
        width={100}
        isLoading={isSubmitting}
      >
        {rest.children}
      </LoadButton>
    </div>
  )
}

ButtonContainer.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
}
