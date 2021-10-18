import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/LoginPage/Login'
import Register from './pages/RegisterPage/Register';
import Home from './pages/HomePage/Home';
import Account from './pages/AccountPage/Account';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';

// import PrivateRoute from './components/privateRoute';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/products" component={Products} />
          <Route path="/:categoryTitle/:id" component={ProductDetail} />
          <Route path="/:categoryTitle" component={Home} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
