import React from "react";
import PropTypes from "prop-types";

import { Spinner } from "react-bootstrap";

export default function Loading({ size }) {
  return (
    <Spinner animation="grow" role="status" size={size}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

Loading.propTypes = {
  size: PropTypes.string,
};

Loading.defaultProps = {
  size: "md",
};
