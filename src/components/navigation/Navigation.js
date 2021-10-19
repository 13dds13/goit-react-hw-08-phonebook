import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes }) => {
  return routes.map((route) => (
    <NavLink to={route.path} exact key={route.path}>
      {route.name}
    </NavLink>
  ));
};

export default Navigation;
