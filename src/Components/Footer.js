import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";

function Footer() {
  return (
    <footer className={`${styles.footer} `}>
      <Dogs />
      <span>Dogs. Alguns direitos reservados. ©</span>
    </footer>
  );
}

export default Footer;
