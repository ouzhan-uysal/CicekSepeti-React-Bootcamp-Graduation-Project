import styled from "styled-components";

export const ProductWrapper = styled.div`
  background-color: #fff;
  margin: 1em 10em;
  display: grid;
  grid-template-columns: 1fr 1% 1fr;
  .product-details {
    padding: 0 1em;
    form {
      display: grid;
      label {
        user-select: none;
        margin-top: .7rem;
        font-size: .8rem;
        padding: .3rem 0;
      }
      input {
        padding: 1em;
        color: #99A0A7;
        background-color: #F4F4F4;
        border: none;
        border-radius: 8px;
      }
      textarea {
        padding: 1em;
        color: #99A0A7;
        background-color: #F4F4F4;
        resize: none;
        border: none;
        border-radius: 8px;
      }
      select {
        padding: .5em;
        color: #99A0A7;
        background-color: #F4F4F4;
        border: none;
        border-radius: 8px;
      }
    }
  }
  hr {
  }
  .product-img {
    position: relative;
    padding: 0 1em;
    div {
      padding: 1em;
      border: 1px dashed #B1B1B1;
      border-radius: 10px;
      text-align: center;
      p {
        // Drag and Drop File
        input[type='file'] {
          // opacity: 0;
          border: none;
          background-color #B1B1B1;
        }
      }
    }
    button {
      position: absolute;
      margin: 1em;
      right: 0;
      bottom: 0;
      width: auto;
    }
  }
`;