import React from "react";
import NavBtn from "../navBtn/NavBtn";
import styles from "./HeaderUserWelcome.module.css";

const HeaderUserWelcome = ({ userName, userEmail, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeText}>
        <p>
          Hello, <b>{userName}</b>!
        </p>
        <p>
          You are logged in as: <b>{userEmail}</b>
        </p>
      </div>
      <NavBtn title="Log out" handleClick={onClick} />
    </div>
  );
};

export default HeaderUserWelcome;
