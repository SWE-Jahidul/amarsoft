import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { users,isloading } = useAuth();
if(isloading ){
    return <div> loading</div>
}
  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.email ? (
          children
        ) : (
          <Redirect>
            to=
            {{
              pathname: "/signin",
              state: { from: location },
            }}
          </Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
