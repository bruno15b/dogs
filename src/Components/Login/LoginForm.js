import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import styles from "./LoginForm.module.css";

function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={styles.form}>
      <h1>Login</h1> <br />
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">cadastro</Link>
    </div>
  );
}

export default LoginForm;
