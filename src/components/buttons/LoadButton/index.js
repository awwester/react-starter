import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

import Loading from 'components/Loading';

class LoadButton extends React.Component {
  // Render a button that turns into a loading spinner when async request is loading.

  render() {
    const { width, isLoading, spinnerColor, ...rest } = this.props;

    return (
      <Button { ...rest } style={{ width: width || 150 }}>
        {isLoading ? <Loading color={spinnerColor || "light"} size="sm" /> : this.props.children }
      </Button>
    );
  }
}

LoadButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  width: PropTypes.number,
  spinnerColor: PropTypes.string,
};

export default LoadButton;
