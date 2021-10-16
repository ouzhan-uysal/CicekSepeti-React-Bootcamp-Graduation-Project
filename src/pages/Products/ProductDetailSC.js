import styled from 'styled-components';

export const DetailWrapper = styled.div`
  background-color: #fff;
  margin: 1em 10em;
  padding: .8em;
  display:grid;
  grid-template-columns: 1fr 1fr;
  .details {
    form {
      display:grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .price-offer {
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
  }
`;