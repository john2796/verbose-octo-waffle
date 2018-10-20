import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styled from 'styled-components';

const BuildControlsWrapper = styled.div`
  .BuildControls {
    width: 100%;
    background-color: #cf8f2e;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;
  }

  .OrderButton {
    background-color: #dad735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;
  }

  .OrderButton:hover,
  .OrderButton:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  .OrderButton:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  .OrderButton:not(:disabled) {
    animation: enable 0.3s linear;
  }

  @keyframes enable {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = ({
  price,
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchasable,
  ordered
}) => (
  <BuildControlsWrapper>
    <div className="BuildControls">
      <p>
        Current Price <strong>{price.toFixed(2)}</strong>
      </p>

      {/* looping through controls array */}
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}

      <button className="OrderButton" disabled={purchasable} onClick={ordered}>
        ORDER NOW
      </button>
    </div>
  </BuildControlsWrapper>
);

export default buildControls;
