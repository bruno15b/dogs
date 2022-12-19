import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;