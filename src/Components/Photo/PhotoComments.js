import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

function PhotoComments({ id, commentsFromServer }) {
  const [arrayComments, setArrayComments] = React.useState(commentsFromServer);
  const { login } = React.useContext(UserContext);
  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [arrayComments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {arrayComments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {login && <PhotoCommentsForm setArrayComments={setArrayComments} id={id} />}{" "}
    </>
  );
}

export default PhotoComments;
