import React from 'react';

import styled from 'styled-components';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const ToolbarStyle = styled.div`
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
      background: red;
    }
  }

  .Logo {
    width: 80%;
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
    <ToolbarStyle>
      <header className="Toolbar">
        <div>Menu</div>
        <Logo height="80%" className="Logo" />
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </header>
    </ToolbarStyle>
  );
};

export default toolbar;
