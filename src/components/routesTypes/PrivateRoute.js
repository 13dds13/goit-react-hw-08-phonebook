import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLogged } from "../../redux/users/usersSelectors";

const PrivateRoute = ({ route }) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? (
    <Route component={route.component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
