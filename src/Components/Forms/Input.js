import React from "react";
import styles from "./Input.module.css";
function Input({ label, type, name }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.input} type={type} id={name} name={name} />
      <p className={styles.error}>error</p>
    </div>
  );
}

export default Input;
