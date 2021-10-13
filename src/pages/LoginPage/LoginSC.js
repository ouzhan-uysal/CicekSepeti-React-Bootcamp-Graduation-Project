import Styled from 'styled-components';

export const LoginWrapper = Styled.div`
  display: grid;
  grid-template-columns: 1fr 59%;
  .main-img {
    display: grid;
    img {
      max-width:100%;
      max-height:100%;
    }
  }
  .login-container {
    display: grid;
    align-content: center;
    justify-items: center;
    grid-gap: 5em;
    .form-container {
      display: grid;
      justify-items: center;
      background-color: #fff;
      width: 30vw;
      padding: 1em;
      box-shadow: 0px 3px 12px #1E36480A;
      border-radius: 8px;
      opacity: 1;
      p {
        color: #525252;
        font-size: 1em;
        &:first-child {
          font-size: 2em;
          font-weight: 800;
        }
        a {
          color: #4B9CE2;
          cursor: pointer;
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
          border: none;
          border-radius: 1em;
          background-color: #4B9CE2;
          color: #fff;
          height: 2em;
          cursor: pointer;
        }
        input {
          color: #99A0A7;
          background-color: #F4F4F4;
          border-radius: .3em;
          &:focus {
            border-radius: .3em;
            background-color: #F0F8FF;
            color: #3E3E3E;
          }
        }
      }
    }
  }

  // responsive
  @media all and (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr;
    
    .main-img {
      display: none;
    }
    .login-container {
      display: grid;
      align-content: center;
      justify-content: center;
      justify-items: center;
      grid-gap: 5em;
      .form-container {
        width: 100%;
      }
    }
  }
`;