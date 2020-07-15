import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import logo from './assets/images/logo/programming-hero-web-logo.png';
import './css/myBulma.css';
import './App.css';
import MainNav from './components/main-nav/MainNav';
import Login from './components/authentication/login/Login';
import Register from './components/authentication/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import { AuthContextProvider, PrivateRoute } from './custom-hooks/useAuth';



function App() {
  
  return (


    <Router>
      <div>
      <AuthContextProvider>
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

        <MainNav />


        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/">
           
          </Route>
        </Switch>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
