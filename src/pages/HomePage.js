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
      {!isLogged ? (
        <>
          <NavBtn title={mainRoutes[1].name} goTo={mainRoutes[1].path} />
          <NavBtn title={mainRoutes[2].name} goTo={mainRoutes[2].path} />
        </>
      ) : (
        <NavBtn title={mainRoutes[3].name} goTo={mainRoutes[3].path} />
      )}
    </div>
  );
};

export default HomePage;
