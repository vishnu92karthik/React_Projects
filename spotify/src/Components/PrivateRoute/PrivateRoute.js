import React from "react";
import { Redirect, Route } from "react-router-dom";
import { LOGIN, SIGN_UP } from "../../Constants/routes";
import { useAuth } from "../../context/AuthContext";
const PrivateRoute = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: SIGN_UP,
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  
  export default PrivateRoute;