import styled from "styled-components";

export const BuyModalWrapper = styled.div`
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
    .modal-content {
      width: 20rem;
      background-color: #fff;
      display: grid;
      grid-template-columns: 1fr;
      padding: 1rem;
      justify-items: center;
      box-shadow: 0px 3px 12px #1E36482E;
      border-radius: 8px;
      gap: 1rem;
      .modal-header {
        text-align: left;
        font: normal normal bold 25px/23px Nunito;
        letter-spacing: 0px;
        color: #525252;
      }
      .modal-body {
        font: normal normal normal 15px/23px Nunito;
        letter-spacing: 0px;
        color: #555555;
      }
      .modal-btn {
        button {
          margin: 0 .5rem;
          &:nth-child(1) {
            background-color: #F0F8FF;
            color: #4B9CE2;
          }
          &:nth-child(2) {
            background-color: #4B9CE2;
            color: #fff;
          }
        }
      }
    }
  }
`;

export const OfferModalWrapper = styled.div`
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

    .modal-content {
      display: grid;
      width: 25rem;
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0px 3px 12px #1E36482E;
      border-radius: 10px;
      .modal-close {
        display: grid;
        grid-template-columns: 3fr 1fr;
        button {
          padding: 0;
          margin: 1em 0;
          background-color: #fff;
        }
      }
      .modal-header {
        padding: .5rem;
        display: grid;
        grid-template-columns: .5fr 1fr 2fr;
        background-color: #F0F8FF;
        align-items: center;
        justify-items: end;
        img {
          border-radius: 8px;
        }
        span {
          text-align: left;
          font: normal normal normal 13px/16px Nunito;
          letter-spacing: 0px;
          color: #555555;
          &:last-child {
            font: normal normal bold 18px/32px Nunito;
            color: #525252;
          }
        }
      }
      .modal-body {
        padding 1rem;
        display: grid;
        grid-template-columns: 1fr;
        label {
          margin: .3rem 0;
          padding: .5rem;
          border: 1px solid #E0E0E0;
          border-radius: 8px;
          input[type=checkbox] {
            color: #F0F8FF;
            background-color: #4B9CE2;
          }
          input:last-child {
            background-color: #F4F4F4;
            width: 100%;
            height: 100%;
            border: none;
          }
          &:last-child {
            padding: 0;
            height: 2rem;
          }
        }
      }
      button {
        background-color: #4B9CE2;
        color: #fff;
        border-radius: 8px;
        width: 70%;
        justify-self: center;
      }
    }
  }
`;