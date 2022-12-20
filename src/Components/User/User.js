import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import NaoEncontrada from "../NaoEncontrada";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </section>
  );
}

export default User;
