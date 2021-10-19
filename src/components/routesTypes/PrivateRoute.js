import React from "react";
import { Route } from "react-router";

const PrivateRoute = ({ route }) => {
  return <Route component={route.component} />;
};

export default PrivateRoute;
