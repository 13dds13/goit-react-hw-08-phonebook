import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../components/loginForm/LoginForm";
import { mainRoutes } from "../routes/mainRoutes";
import { usersLogin } from "../redux/users/usersOperations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => {
    dispatch(usersLogin(userData));
  };
  return <LoginForm handleSubmit={handleSubmit} btnName={mainRoutes[1].name} />;
};

export default LoginPage;
