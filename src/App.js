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

// import PrivateRoute from './components/privateRoute';


function App() {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
