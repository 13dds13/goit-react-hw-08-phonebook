import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLogged } from "../../redux/users/usersSelectors";

const Navigation = ({ routes }) => {
  const isLogged = useSelector(getIsLogged);
  return routes.map((route) =>
    (isLogged && route.restricted) ||
    (!isLogged && route.type === "private") ? null : (
      <NavLink to={route.path} exact key={route.path}>
        {route.name}
      </NavLink>
    )
  );
};

export default Navigation;
