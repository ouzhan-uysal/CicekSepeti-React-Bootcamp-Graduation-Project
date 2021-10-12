import './App.scss';
import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register';
import Home from './pages/HomePage/Home';

const MainWrapper = styled.div`
  background: #FBFBFB 0% 0% no-repeat padding-box;
  opacity: 1;
  `;

function App() {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
