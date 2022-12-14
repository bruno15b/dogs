import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("dogs");
    },
    [navigate]
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Inválido");
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token) {
    const { url, options } = await USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: usuário ou senha inválidos`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      getUser(token);
      navigate("dogs");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return <UserContext.Provider value={{ userLogin, data, login, userLogout, error, loading, navigate }}>{children}</UserContext.Provider>;
}
