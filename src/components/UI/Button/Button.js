import React from 'react';

import styled from 'styled-components';

const ButtonWrapper = styled.div`
  .Button {
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
  }

  .Button:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }

  .Success {
    color: #5c9210;
  }

  .Danger {
    color: #944317;
  }
`;

const button = ({ btnType, clicked, children }) => {
  return (
    <ButtonWrapper>
      <button onClick={clicked} className={['Button', [btnType]].join(' ')}>
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default button;
