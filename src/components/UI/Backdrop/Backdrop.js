import React from 'react';
import styled from 'styled-components';

const BackdropWrapper = styled.div`
  .Backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const backdrop = ({ clicked, show }) => (
  <BackdropWrapper>
    {show ? <div className="Backdrop" onClick={clicked} /> : null}
  </BackdropWrapper>
);

export default backdrop;
