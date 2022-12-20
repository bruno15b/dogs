import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();
  React.useEffect(() => {
    if ("/dogs/conta/estatisticas" === location.pathname) {
      setTitle("Estatísticas");
    } else if ("/dogs/conta/postar" === location.pathname) {
      setTitle("Poste Sua Foto");
    } else if ("/dogs/conta" === location.pathname) {
      setTitle("Minha Conta");
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
