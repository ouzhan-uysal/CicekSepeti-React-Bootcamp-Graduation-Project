import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .main-img {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      flex-shrink: 0;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .login-container {

  }
`;

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <div className="main-img">
          <img src="/group52.png" alt="main_img"/>
        </div>
        <div className="login-container">
          <div>
            <img src="/group6607.svg" alt="second_img"/>
          </div>
          <div>
            <h3>Giriş Yap</h3>
            <p>Fırsatlardan yararlanmak için giriş yap!</p>
            <form>
              <label>Email</label>
              <input type="email"/>
              <label>Password</label>
              <input type="password"/>
            </form>
          </div>
        </div>
      </LoginWrapper>
    </>
  )
}

export default Login;