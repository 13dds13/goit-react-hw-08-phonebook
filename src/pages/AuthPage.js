import React from "react";
import { useDispatch } from "react-redux";
import { mainRoutes } from "../routes/mainRoutes";
import { usersLogin, usersSignup } from "../redux/users/usersOperations";
import AuthForm from "../components/authForm/AuthForm";
import { useLocation } from "react-router";

const SignupPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const handleSubmit = (userData) => {
    pathname === "/signup"
      ? dispatch(usersSignup(userData))
      : dispatch(usersLogin(userData));
  };
  return mainRoutes
    .filter(({ restricted }) => restricted)
    .map(
      ({ path, name }) =>
        path === pathname && (
          <AuthForm handleSubmit={handleSubmit} btnName={name} key={path} />
        )
    );
};

export default SignupPage;
