import React, { useState } from 'react';
import styled from 'styled-components';

const BuyModalWrapper = styled.div`
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(111,111,111,0.5);
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    width: 500px;
    background-color: #fff;
  }
  .modal-header {
    padding: 10px;
  }
  .modal-title {
    margin: 0;
  }
  .modal-body {
    padding 10px;
    border-top: 1px solid #eee;
  }
`;
const OfferModalWrapper = styled.div`
  .modal-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    width: 500px;
    background-color: #fff;
  }
  .modal-header {
    padding: 10px;
  }
  .modal-title {
    margin: 0;
  }
  .modal-body {
    padding 10px;
    border-top: 1px solid #eee;
  }
`;

export const BuyModal = ({ show, close }) => {
  if (!show) {
    return null
  }
  return (
    <BuyModalWrapper>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-close">
            <button onClick={close} >Close</button>
          </div>
          <div className="modal-header">
            Header
          </div>
          <div className="modal-body">
            Body
          </div>
        </div>
      </div>
    </BuyModalWrapper>
  )
}

export const OfferModal = ({ show, close }) => {
  if (!show) {
    return null
  }
  return (
    <OfferModalWrapper>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-close">
            <button onClick={close}>Close</button>
          </div>
          <div className="modal-header">
            Header
          </div>
          <div className="modal-body">
            Body
          </div>
        </div>
      </div>
    </OfferModalWrapper>
  )
}