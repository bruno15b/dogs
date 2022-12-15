import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import styles from "./LoginForm.module.css";
import { TOKEN_POST, USER_GET } from "../../api";
import useForm from "../../Hooks/useForm";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({ username: username.value, password: password.value });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
      console.log(json);
    }
  }
  return (
    <div className={styles.form}>
      <h1>Login</h1> <br />
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">cadastro</Link>
    </div>
  );
}

export default LoginForm;
