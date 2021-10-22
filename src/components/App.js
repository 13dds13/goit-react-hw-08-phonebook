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
import { getErrorMsg } from "../redux/selectors/selectors";
import Notification from "./notification/Notification";
import HeaderUserWelcome from "./headerUserWelcome/HeaderUserWelcome";
import { header, main } from "./container/Container.module.css";

const App = () => {
  const token = useSelector(getToken);
  const isLogged = useSelector(getIsLogged);
  const errorMsg = useSelector(getErrorMsg);
  const dispatch = useDispatch();

  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);

  useEffect(() => {
    !userName && token && dispatch(usersRefresh(token));
  }, [dispatch, token, userName]);

  const onClick = () => {
    dispatch(usersLogout());
  };

  return (
    <>
      <header className={header}>
        {errorMsg && <Notification title={errorMsg} />}
        <Navigation routes={mainRoutes} />
        {isLogged && (
          <HeaderUserWelcome
            userName={userName}
            userEmail={userEmail}
            onClick={onClick}
          />
        )}
      </header>
      <hr />
      <main className={main}>
        <RoutesList routes={mainRoutes} />
      </main>
    </>
  );
};

export default App;
