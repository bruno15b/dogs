import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

function Header() {
  const { login, data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="dogs" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {login ? (
          <Link className={styles.login} to="dogs/conta">
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} to="dogs/login">
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
