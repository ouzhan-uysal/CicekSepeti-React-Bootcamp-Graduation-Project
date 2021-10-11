import React from 'react';
import styled from 'styled-components';

const RegisterWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
.main-img {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    flex-shrink: 0;
    max-width: 80%;
    max-height: 100%
  }
}
.login-container {
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;
  .form-container {
    display: grid;
    justify-items: center;
    background-color: #fff;
    width: 30vw;
    padding: 1em;
    form {
      display: grid;
      button {
        margin-top: 1em;
        border: none;
        border-radius: 1em;
        background-color: #4B9CE2;
        color: #fff;
      }
    }
  }
}
`;

const Register = () => {
  return (
    <>
      <RegisterWrapper>
        <div className="main-img">
          <img src="/group52.png" alt="main_img" />
        </div>
        <div className="login-container">
          <div>
            <img src="/group6607.svg" alt="second_img" />
          </div>
          <div className="form-container">
            <h2>Üye Ol</h2>
            <p>Fırsatlardan yararlanmak için üye ol!</p>
            <form>
              <label for="registerEmail">Email</label>
              <input type="email" id="registerEmail" />
              <label for="registerPassword">Password</label>
              <input type="password" id="registerPassword" />
              <button>Kayıt Ol</button>
            </form>
          </div>
        </div>
      </RegisterWrapper>
    </>
  )
}

export default Register;