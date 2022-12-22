import React from "react";
import { COMMENT_POST } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import styles from "./PhotoCommentsForm.module.css";

function PhotoCommentsForm({ id, setArrayComments, single }) {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState("");
  const token = window.localStorage.getItem("token");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setArrayComments((comments) => [...comments, json]);
    }
  }
  return (
    <form className={`${styles.form} ${single ? styles.single : ""}`} onSubmit={handleSubmit}>
      <textarea className={styles.textArea} name="comentario" id="comentario" value={comment} onChange={({ target }) => setComment(target.value)} />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
}

export default PhotoCommentsForm;
