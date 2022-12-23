import React from "react";
import { useLocation } from "react-router-dom";
import { PASSWORD_LOST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";
import styles from "./LoginPasswordLost.module.css";

function LoginPasswordLost() {
  const location = useLocation();

  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({ login: login.value, url: window.location.href.replace("perdeu", "resetar") });
      request(url, options);
    }
  }
  console.log(location);
  return (
    <section className={styles.pass}>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "green" }}> {data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email/Usuário" type="text" name="email" {...login} />
          {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar Email</Button>}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
