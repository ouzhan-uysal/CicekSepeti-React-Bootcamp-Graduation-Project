import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import MainWrapper from './AppSC';
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register';
import Home from './pages/HomePage/Home';
import Account from './pages/AccountPage/Account';

// import PrivateRoute from './components/privateRoute';


function App() {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={Account} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
