import React from "react";
import Head from "./Helper/Head";

function NaoEncontrada() {
  return (
    <div className="container" style={{ paddingTop: "30px" }}>
      <Head title="Error 404" />
      <h1 className="title">404: Pagina Não Encontrada</h1>
    </div>
  );
}

export default NaoEncontrada;
