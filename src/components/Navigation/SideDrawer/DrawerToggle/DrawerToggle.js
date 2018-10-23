import React from 'react';
import styled from 'styled-components';

const DrawerWrapper = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  div {
    width: 90%;
    height: 3px;
    background-color: white;
  }

  @media (min-width: 500px) {
    div {
      display: none;
    }
  }
  @media (max-width: 499px) {
    h1 {
      display: none;
      color: red;
    }
  }
`;

const drawerToggle = props => (
  <DrawerWrapper onClick={props.clicked} className="DrawerToggle">
    <h1>menu</h1>
    <div />
    <div />
    <div />
  </DrawerWrapper>
);

export default drawerToggle;
