import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./navigation/Navigation";
import { mainRoutes } from "../routes/mainRoutes";
import RoutesList from "./routesList/RoutesList";
import {
  getIsLogged,
  getToken,
  getUserEmail,
  getUserName,
} from "../redux/users/usersSelectors";
import { usersRefresh, usersLogout } from "../redux/users/usersOperations";

const App = () => {
  const token = useSelector(getToken);
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);

  useEffect(() => {
    !userName && token && dispatch(usersRefresh(token));
  }, [dispatch, token, userName]);

  const onClick = () => {
    dispatch(usersLogout(token));
  };

  return (
    <>
      {isLogged && (
        <>
          <p>
            Hello, <b>{userName}</b> !
          </p>
          <p>
            You are logged in as: <b>{userEmail}</b>
          </p>
          <button type="button" onClick={onClick}>
            Log out
          </button>
          <br />
          <hr />
        </>
      )}
      <Navigation routes={mainRoutes} />
      <hr />
      <RoutesList routes={mainRoutes} />
    </>
  );
};

export default App;
