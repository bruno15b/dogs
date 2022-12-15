import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

function Login() {
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
      </Routes>
    </div>
  );
}

export default Login;
