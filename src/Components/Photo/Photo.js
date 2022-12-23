import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET_FOR_NEW_PAGE } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import styles from "./Photo.module.css";
import Head from "../Helper/Head";

function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url } = PHOTO_GET_FOR_NEW_PAGE(id);
    request(url);
  }, [request, id]);

  console.log(data);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className={`${styles.photo} container mainContainer`}>
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
}

export default Photo;
