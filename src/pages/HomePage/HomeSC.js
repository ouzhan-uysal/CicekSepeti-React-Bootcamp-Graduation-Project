import Styled from 'styled-components';

export const HomeWrapper = Styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(auto, 1fr));
  justify-content: center;
  background-color: #F2F2F2;
  margin: 0 10rem;
  .poster {
    margin: 1em 0;
    max-width: 100%;
    max-height: 100%;
  }
  .category-container {
    display: grid;
    justify-items: center;
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
  .product-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
    .loading-spinner {
      
    }
    .product-item {
      background-color: #fff;
      border-radius: .5em;
      margin: 1em;
      padding: .5em;
      display: grid;
      justify-content: center;
      cursor: pointer;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .product-info {
        display: flex;
        justify-content: space-between;
        span {
          &:first-child {
            color: #4B9CE2;
          }
        }
      }
      .product-price {

      }
    }
  }
`;
