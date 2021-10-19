import React, { Suspense } from "react";
import { Switch } from "react-router";
import PrivateRoute from "../routesTypes/PrivateRoute";
import PublicRoute from "../routesTypes/PublicRoute";

const RoutesList = ({ routes }) => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {routes.map((route) => {
          return route.type === "public" ? (
            <PublicRoute
              exact
              path={route.path}
              route={route}
              key={route.name}
            />
          ) : (
            <PrivateRoute
              exact
              path={route.path}
              route={route}
              key={route.name}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default RoutesList;
