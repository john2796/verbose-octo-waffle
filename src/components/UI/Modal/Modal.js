import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';
import styled from 'styled-components';

// styles starts here
const ModalWrapper = styled.div`
  .Modal {
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
  }

  @media (min-width: 600px) {
    .Modal {
      width: 500px;
      left: calc(50% - 250px);
    }
  }
`;
// styles Ends here

class Modal extends Component {
  state = {};

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  componentWillUpdate(nextProps, nextState) {
    console.log('[Modal] WillUpdate');
  }

  render() {
    const { show, children, modalClosed } = this.props;
    return (
      <ModalWrapper>
        <Aux>
          <Backdrop show={show} clicked={modalClosed} />
          <div
            className="Modal"
            style={{
              transform: show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: show ? '1' : '0'
            }}
          >
            {children}
          </div>
        </Aux>
      </ModalWrapper>
    );
  }
}

export default Modal;
