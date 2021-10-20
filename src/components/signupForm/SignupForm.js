import React, { useState } from "react";

const SignupForm = ({ handleSubmit, btnName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { type, value } = e.target;
    type === "text" && setName(value);
    type === "email" && setEmail(value);
    type === "password" && setPassword(value);
  };

  const formReset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name, email, password });
    formReset();
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        name
        <input
          type="text"
          autoComplete="off"
          placeholder="type here..."
          onChange={onChange}
          value={name}
          required
        />
      </label>
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

export default SignupForm;
