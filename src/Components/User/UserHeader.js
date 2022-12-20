import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation, useParams } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    if ("/conta/estatisticas" === location.pathname) {
      setTitle("Estatísticas");
    } else if ("/conta/postar" === location.pathname) {
      setTitle("Poste Sua Foto");
    } else if ("/conta" === location.pathname) {
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
