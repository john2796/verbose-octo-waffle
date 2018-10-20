import React from 'react';
import styled from 'styled-components';

/// style starts here  ///
const NavigationItemWrapper = styled.div`
  .NavigationItem {
    margin: 10px 0;
    width: 100%;
    display: block;
    box-sizing: border-box;
  }

  .NavigationItem a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    display: block;
    box-sizing: border-box;
  }

  .NavigationItem a:hover,
  .NavigationItem a:active,
  .NavigationItem a.active {
    color: #40a4c8;
  }

  @media (min-width: 500px) {
    .NavigationItem {
      margin: 0;
      display: flex;
      height: 100%;
      width: auto;
      align-items: center;
    }

    .NavigationItem a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;
    }

    .NavigationItem a:hover,
    .NavigationItem a:active,
    .NavigationItem a.active {
      background: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`;
/// style ends here  ///

const navigationItem = ({ links, children, active }) => (
  <NavigationItemWrapper>
    <li className="NavigationItem">
      <a href={links} className={active ? 'active' : null}>
        {children}
      </a>
    </li>
  </NavigationItemWrapper>
);

export default navigationItem;
