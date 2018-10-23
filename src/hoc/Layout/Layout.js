import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  .Content {
    margin-top: 72px;
  }
`;

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHander = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggledHander = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const { showSideDrawer } = this.state;
    return (
      <LayoutWrapper>
        <Aux>
          <Toolbar drawerTogglClicked={this.sideDrawerToggledHander} />
          <SideDrawer
            closed={this.sideDrawerClosedHander}
            open={showSideDrawer}
          />
          <main className="Content">{this.props.children}</main>
        </Aux>
      </LayoutWrapper>
    );
  }
}

export default Layout;
