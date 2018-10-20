import React from 'react';

import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolbarWrapper = styled.div`
  .Toolbar {
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #703b09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;

    nav {
      height: 100%;
    }
  }
  .Logo {
    height: 70px;
  }

  /*  */
  @media (max-width: 499px) {
    .DesktopOnly {
      display: none;
    }
  }
`;

const toolbar = props => {
  return (
    <ToolbarWrapper>
      <header className="Toolbar">
        <div>Menu</div>
        <div className="Logo">
          <Logo />
        </div>

        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </header>
    </ToolbarWrapper>
  );
};

export default toolbar;
