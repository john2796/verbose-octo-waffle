import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styled from 'styled-components';

const NavigationItemsWrapper = styled.div`
  .NavigationItems {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
  }

  @media (min-width: 500px) {
    .NavigationItems {
      flex-flow: row;
    }
  }
`;

const navigationItems = props => {
  return (
    <NavigationItemsWrapper>
      <ul className="NavigationItems">
        <NavigationItem link="/" active>
          Burger Builder
        </NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
      </ul>
    </NavigationItemsWrapper>
  );
};

export default navigationItems;
