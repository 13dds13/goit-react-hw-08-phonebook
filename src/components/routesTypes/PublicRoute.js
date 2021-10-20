import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLogged } from "../../redux/users/usersSelectors";

const PublicRoute = ({ route }) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged && route.restricted ? (
    <Redirect to="/" />
  ) : (
    <Route component={route.component} />
  );
};

export default PublicRoute;
