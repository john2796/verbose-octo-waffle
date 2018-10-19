import React from 'react';
import classes from './Button.module.css';

const button = ({ btnType, clicked, children }) => {
  return (
    <button
      onClick={clicked}
      className={[classes.Button, classes[btnType]].join(' ')}
    >
      {children}
    </button>
  );
};

export default button;
