import React from "react";
import { USER_POST } from "../../api";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import styles from "./LoginCreate.module.css";
import { UserContext } from "../../UserContext";

function LoginCreate() {
  const username = useForm();
  const password = useForm();
  const email = useForm("email");
  const { userLogin } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <div className="animaLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="username" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...password} />
        <Button>Criar</Button>
      </form>
    </div>
  );
}

export default LoginCreate;
