import React from "react";
import { useHistory } from "react-router";
import { btn } from "./NavBtn.module.css";

const NavBtn = ({ title, goTo, handleClick }) => {
  const history = useHistory();
  const onClick = () => {
    goTo && history.push(goTo);
    handleClick && handleClick();
  };
  return (
    <button type="button" onClick={onClick} className={btn}>
      {title}
    </button>
  );
};

export default NavBtn;
