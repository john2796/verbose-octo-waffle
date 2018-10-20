import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  .Logo {
    background: white;
    padding: 8px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .Logo img {
    height: 100%;
  }
`;

const logo = props => (
  <LogoWrapper>
    <div className="Logo" style={{ height: props.height }}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  </LogoWrapper>
);

export default logo;
