import React from "react";
import { useDispatch } from "react-redux";
import SignupForm from "../components/signupForm/SignupForm";
import { mainRoutes } from "../routes/mainRoutes";
import { usersSignup } from "../redux/users/usersOperations";

const SignupPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (userData) => {
    dispatch(usersSignup(userData));
  };
  return (
    <SignupForm handleSubmit={handleSubmit} btnName={mainRoutes[2].name} />
  );
};

export default SignupPage;
