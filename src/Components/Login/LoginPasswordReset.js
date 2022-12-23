import React from "react";
import Input from "../Forms/Input";
import useFetch from "../../Hooks/useFetch";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { PASSWORD_RESET } from "../../api";
import Error from "../Helper/Error";
import { useLocation, useNavigate } from "react-router-dom";
import Head from "../Helper/Head";

function LoginPasswordReset() {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const passwordConfirm = useForm();
  const { error, request, loading } = useFetch();
  const navigate = useNavigate();
  const location = useLocation();
  const [diferent, setDiferent] = React.useState(null);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, [location.search]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      if (password.value === passwordConfirm.value) {
        setDiferent(null);
        const { url, options } = PASSWORD_RESET({ login, key, password: password.value });
        const { response } = await request(url, options);
        if (response.ok) navigate("/dogs/login");
      } else {
        setDiferent("Senhas são diferentes!");
      }
    }
  }
  return (
    <section>
      <Head title="Resetar Senha" />
      <h1 className="title">Reset a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />
        <Input label="Repita a senha" type="password" name="passwordRepeat" {...passwordConfirm} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Reset</Button>}
        <Error error={diferent} />
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginPasswordReset;
