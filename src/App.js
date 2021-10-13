import './App.scss';
import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register';
import Home from './pages/HomePage/Home';

import PrivateRoute from './components/privateRoute';

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
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
