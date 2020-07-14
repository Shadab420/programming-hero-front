import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './assets/images/logo/programming-hero-web-logo.png';
import './css/myBulma.css';
import './App.css';
import Login from './components/authentication/login/Login';
import Register from './components/authentication/register/Register';

function App() {
  return (
    <Router>
      <div className="container is-fluid">
        {/* <img src={logo} alt="logo"/>
        <p className="has-text-weight-semibold has-text-danger">Programming Hero Web Course</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
