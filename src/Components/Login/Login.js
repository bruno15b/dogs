import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";
import { UserContext } from "../../UserContext";
import NaoEncontrada from "../NaoEncontrada";
import Head from "../Helper/Head";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="dogs/conta" />;
  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.forms}>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="/resetar" element={<LoginPasswordReset />} />
          <Route path="/perdeu" element={<LoginPasswordLost />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </div>
    </section>
  );
}

export default Login;
