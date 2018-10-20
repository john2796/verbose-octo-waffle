import React from 'react';
import styled from 'styled-components';

const BuildControlWrapper = styled.div`
  .BuildControl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
  }

  .BuildControl button {
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #aa6817;
    cursor: pointer;
    outline: none;
  }

  .BuildControl button:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  .BuildControl button:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }

  .Label {
    padding: 10px;
    font-weight: bold;
    width: 80px;
  }

  .BuildControl .Less {
    background-color: #d39952;
    color: white;
  }

  .BuildControl .More {
    background-color: #8f5e1e;
    color: white;
  }

  .BuildControl .Less:hover,
  .BuildControl .Less:active {
    background-color: #daa972;
    color: white;
  }

  .BuildControl .More:hover,
  .BuildControl .More:active {
    background-color: #99703f;
    color: white;
  }
`;

const buildControl = ({ label, added, removed, disabled }) => {
  return (
    <BuildControlWrapper>
      <div className="BuildControl">
        <div className="Label">{label}</div>
        <button className="Less" onClick={removed} disabled={disabled}>
          Less
        </button>
        <button className="More" onClick={added}>
          More
        </button>
      </div>
    </BuildControlWrapper>
  );
};

export default buildControl;
