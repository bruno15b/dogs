import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 600px)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const nav = React.useRef();

  React.useEffect(() => {
    function clickOutNavClose({ target }) {
      if (!nav.current.innerHTML.includes(target.innerHTML)) {
        setMobileMenu(false);
      }
    }
    document.body.addEventListener("click", clickOutNavClose);
    return () => document.body.removeEventListener("click", clickOutNavClose);
  }, []);

  function handleClick() {
    setMobileMenu(!mobileMenu);
  }

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label="menu" onClick={handleClick}></button>}
      <nav ref={nav} className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="estatisticas">
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <div className={styles.sair} onClick={() => userLogout()}>
          <Sair />
          <span> {mobile && "Sair"}</span>
        </div>
      </nav>
    </>
  );
}

export default UserHeaderNav;
