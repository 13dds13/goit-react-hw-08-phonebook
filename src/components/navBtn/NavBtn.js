import React from "react";
import { useHistory } from "react-router";

const NavBtn = ({ title, goTo }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(goTo);
  };
  return (
    <button type="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default NavBtn;
