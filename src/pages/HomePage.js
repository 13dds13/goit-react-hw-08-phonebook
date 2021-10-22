import React from "react";
import { useSelector } from "react-redux";
import NavBtn from "../components/navBtn/NavBtn";
import { getIsLogged } from "../redux/users/usersSelectors";
import { mainRoutes } from "../routes/mainRoutes";

const HomePage = () => {
  const isLogged = useSelector(getIsLogged);
  return (
    <div>
      <h1>welcome to contactus</h1>
      <h2>the place where your data in save</h2>
      {mainRoutes.map(
        ({ name, path, restricted, type }) =>
          (isLogged && !restricted && type === "private" && (
            <NavBtn title={name} goTo={path} key={path} />
          )) ||
          (!isLogged && restricted && (
            <NavBtn title={name} goTo={path} key={path} />
          ))
      )}
    </div>
  );
};

export default HomePage;
