import Styled from 'styled-components';

export const RegisterWrapper = Styled.div`
  display: grid;
  grid-template-columns: auto auto;
  .main-img {
    max-height: 100vh;
    img {
      max-width:100%;
      max-height:100%;
    }
  }
  .register-container {
    display: grid;
    align-content: center;
    grid-gap: 4em;
    img {
      padding-left: 15%;
    }
    .form-container {
      display: grid;
      justify-items: center;
      background-color: #fff;
      width: 25vw;
      height: 55vh;
      padding: 1em;
      box-shadow: 0px 3px 12px #1E36480A;
      border-radius: 8px;
      opacity: 1;
      .register-text {
        p {
          text-align: center;
          font: normal normal normal 15px/20px Nunito;
          color: #525252;
          font-size: 1em;
          &:first-child {
            font: normal normal bold 32px/43px Nunito;
            font-size: 2em;
            font-weight: 800;
          }
          span {
            color: #4B9CE2;
            cursor: pointer;
          }
        }
      }
      form {
        display: grid;
        width: 80%;
        label {
          color: #525252;
        }
        button {
          margin-top: 1em;
          width: 389px;
          height: 45px;
          border: none;
          border-radius: 8px;
          background-color: #4B9CE2;
          color: #fff;
          cursor: pointer;
        }
        input {
          color: #99A0A7;
          background-color: #F4F4F4;
          border-radius: 8px;
          border: none;
          padding: .5rem 1rem;
          &:focus {
            border-radius: .3em;
            background-color: #F0F8FF;
            color: #3E3E3E;
          }
        }
      }
    }
  }
`;
