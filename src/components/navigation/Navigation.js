import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsLogged } from "../../redux/users/usersSelectors";
import { list, item, activeItem } from "./Navigation.module.css";

const Navigation = ({ routes }) => {
  const isLogged = useSelector(getIsLogged);
  return (
    <nav>
      <ul className={list}>
        {routes.map((route) =>
          (isLogged && route.restricted) ||
          (!isLogged && route.type === "private") ? null : (
            <li key={route.path}>
              <NavLink
                to={route.path}
                exact
                className={item}
                activeClassName={activeItem}
              >
                {route.name}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
