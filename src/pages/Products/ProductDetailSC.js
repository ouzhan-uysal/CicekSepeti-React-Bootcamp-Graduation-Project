import styled from 'styled-components';

export const DetailWrapper = styled.div`
  background-color: #fff;
  margin: 1em 10em;
  padding: .8em;
  display:grid;
  grid-template-columns: 1fr 1fr;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .details {
    h2 {
      text-align: left;
      font: normal normal normal 34px/23px Nunito;
      letter-spacing: 0px;
      color: #555555;
    }
    padding: 1em;
    form {
      display:grid;
      grid-template-columns: 1fr 1fr;
      label {
        text-align: left;
        font: normal normal bold 15px/20px Nunito;
        letter-spacing: 0px;
        color: #525252;
      }
      input {
        text-align: left;
        font: normal normal normal 15px/20px Nunito;
        letter-spacing: 0px;
        color: #525252;
      }
    }
    &:last-child {
      h3 {
        text-align: left;
        font: normal normal bold 18px/24px Nunito;
        letter-spacing: 0px;
        color: #525252;
      }
    }
    .price {
      text-align: left;
      font: normal normal bold 25px/23px Nunito;
      letter-spacing: 0px;
      color: #525252;
    }
  }
  .offer {
    p {
      &:last-child {
        padding: 1em;
        border-radius: 8px;
        display: inline-block;
        background-color: #f2f2f2;
      }
    }
  }
  .details-btn {
    display: grid;
    grid-template-columns: 1fr 1fr 10%;
    gap: 1em;
    white-space:nowrap;
    button {
      padding: .7em 3em;
      border: none;
      border-radius: 8px;
      &:nth-child(1) {
        background-color: #4B9CE2;
        color: #fff;
      }
      &:nth-child(2) {
        background-color: #F0F8FF;
        color: #4B9CE2;
      }
    }
    p {
      background-color: #FFF0E2;
      color: #FAAD60;
      letter-spacing: 0px;
      padding: 1rem;
      border-radius: 8px;
      white-space: nowrap;
    }
  }
`;