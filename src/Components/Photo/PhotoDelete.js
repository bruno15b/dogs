import React from "react";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "./PhotoDelete.module.css";

function PhotoDelete({ id }) {
  const token = window.localStorage.getItem("token");
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Realmente deseja deletar a foto?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token);
      console.log(url, options);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }
  return (
    <button className={styles.delete} onClick={handleClick}>
      {loading ? "Deletando" : "Deletar"}
    </button>
  );
}

export default PhotoDelete;
