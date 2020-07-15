import React, { useContext, createContext } from 'react'
import { Route, Redirect } from 'react-router-dom';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);


export const PrivateRoute = ({ children, ...rest }) => {
  
    const auth = Auth();

    return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const Auth = () => {


    const user = sessionStorage.getItem('phUser');

    return {

        user

    }
}

export default Auth;