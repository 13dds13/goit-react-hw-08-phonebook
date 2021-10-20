import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getIsLogged } from "../../redux/users/usersSelectors";

const LoginForm = ({ handleSubmit, btnName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogged = useSelector(getIsLogged);

  const onChange = (e) => {
    const { type, value } = e.target;
    type === "email" && setEmail(value);
    type === "password" && setPassword(value);
  };

  const formReset = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ email, password });
    isLogged && formReset();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        email
        <input
          type="email"
          autoComplete="off"
          placeholder="type here..."
          onChange={onChange}
          value={email}
          required
        />
      </label>
      <label>
        password
        <input
          type="password"
          autoComplete="off"
          placeholder="type here..."
          onChange={onChange}
          value={password}
          required
        />
      </label>
      <button type="submit">{btnName}</button>
    </form>
  );
};

export default LoginForm;
