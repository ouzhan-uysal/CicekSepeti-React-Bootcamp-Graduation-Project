import './App.scss';
import styled from 'styled-components';
import React from 'react';
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register'

const MainWrapper = styled.div`
  display: grid;
  height: 100vh;
  background-color: #ddd;
  `;
function App() {
  return (
    <MainWrapper>
      <Register />
    </MainWrapper>
  );
}

export default App;
