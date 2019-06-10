import React from 'react';

import { Spinner } from 'reactstrap';


const Loading = ({ size = 'lg', color = 'primary', style = {} }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const spinnerProps = { size, color };
  return (
    <div className="loading-container" style={containerStyle}>
      <Spinner {...spinnerProps} style={style} />
    </div>
  );
};


export default Loading;
