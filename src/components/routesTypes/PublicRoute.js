import React from "react";
import { Route } from "react-router";

const PublicRoute = ({ route }) => {
  return <Route component={route.component} />;
};

export default PublicRoute;
