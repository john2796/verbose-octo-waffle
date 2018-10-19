import React from 'react';
import classes from './Modal.module.css';

const modal = ({ show, children }) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)'
      }}
    >
      {children}
    </div>
  );
};

export default modal;
