import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from 'styled-components';

const SideDrawerWrapper = styled.div`
  .SideDrawer {
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
  }
  .Logo {
    height: 70px;
  }

  @media (min-width: 500px) {
    .SideDrawer {
      display: none;
    }
  }

  .Open {
    transform: translateX(0);
  }
  .Close {
    transform: translateX(-100%);
  }
`;

const sideDrawer = props => {
  return (
    <SideDrawerWrapper>
      <div className="SideDrawer">
        <div className="Logo">
          <Logo style={{ marginBottom: '32px' }} />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </SideDrawerWrapper>
  );
};

export default sideDrawer;
