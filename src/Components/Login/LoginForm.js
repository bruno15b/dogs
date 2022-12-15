import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className={styles.form}>
      <h1>Login</h1> <br />
      <Link to="/login/criar">cadastro</Link>
    </div>
  );
}

export default LoginForm;
