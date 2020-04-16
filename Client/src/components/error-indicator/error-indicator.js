import React from 'react';

import './error-indicator.css';
import icon from './death-star.svg';

const ErrorIndicator = ({msg}) => {
  if(typeof msg === 'boolean') {
    msg = 'Что то пошло не так.';
  }
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
       {msg}
      </span>
    </div>
  );
};

export default ErrorIndicator;