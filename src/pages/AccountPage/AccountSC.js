import styled from 'styled-components';

export const AccountWrapper = styled.div`
  margin: 0 10rem;
  display: grid;
  .user-container {
    background-color: #fff;
    margin: 1rem 0;
    padding 1rem;
    display: flex;
    align-items:center;
    span {
      margin-left: 1em;
    }
  }
  .offer-container {
    margin: .5rem 0;
    padding: 1rem;
    display: grid;
    gap: .5rem;
    .offers-tab {
      background-color: #fff;
      ul {
        list-style-type: none;
        li {
          float: left;
          margin-right: 2em;
          cursor: pointer;
          &:hover {
            color: #4B9CE2;
          }
          &:focus {
            color: #4B9CE2;
          }
        }
      }
    }
    .offers {
      background-color: #fff;
      padding: 1em;
      .offer-item {
        display: grid;
        margin: .5em 0;
        grid-template-columns: 10% 1fr 1fr;
        img {
          width: 100%;
          height: 100%;
        }
        .product-info {
          margin: 0 1em;
          align-self: center;
          p {
            padding: .3em;
            width: 50%;
            border-radius: 8px;
            &:nth-child(2) {
              color: #B1B1B1;
              background-color: #F2F2F2;
            }
            span {
              color: #000;
            }
          }
        }
        .offer-btns {
          justify-self: end;
          align-self: center;
          button {
            border: none;
            padding: 1em 1.5em;
            border-radius: 8px;
            color: #fff;
            margin: 0 .5em;
            &:nth-child(1) {
              background-color: #4B9CE2;
            }
            &:nth-child(2) {
              background-color: #F77474;
            }
          }
          span {
            
          }
        }
      }
    }
  }
`;