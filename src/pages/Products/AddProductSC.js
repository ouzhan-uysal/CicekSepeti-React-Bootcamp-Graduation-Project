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
      input[type=number] {
        -moz-appearance: textfield;
        ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        /* webkit solution */
        ::-webkit-input-placeholder { 
          text-align:right;
        }
        /* mozilla solution */
        input:-moz-placeholder {
          text-align:right;
        }
      }
      input[type=checkbox] {
        width: 100%;
        height: 100%;
      }
      input {
        padding: 1em;
        color: #000;
        background-color: #F4F4F4;
        border: none;
        border-radius: 8px;
        &placeholder {
          color: #99A0A7;
        }
      }
      textarea {
        padding: 1em;
        color: #000;
        background-color: #F4F4F4;
        resize: none;
        border: none;
        border-radius: 8px;
        &placeholder {
          color: #99A0A7;
        }
      }
      select {
        padding: .5em;
        color: #000;
        background-color: #F4F4F4;
        border: none;
        border-radius: 8px;
      }
    }
  }
  hr {
  }
  .product-img {
    display: grid;
    padding: 0 1em;
    .upload-file {
      display: grid;
      justify-items: center;
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
      align-self: self-end;
      justify-self: end;
      width: 50%;
      height: 3rem;
      margin: 1em;
      border: none;
      background-color: #4B9CE2;
      color: #fff;
      letter-spacing: 0px;
      text-align: center;
      border-radius: 8px;
    }
  }
`;