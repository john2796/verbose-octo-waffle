import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  .Content {
    margin-top: 72px;
  }
`;

const layout = props => {
  return (
    <LayoutWrapper>
      <Aux>
        <Toolbar />
        <SideDrawer />
        <main className="Content">{props.children}</main>
      </Aux>
    </LayoutWrapper>
  );
};

export default layout;
