import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import NaoEncontrada from "./Components/NaoEncontrada";
import React from "react";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="dogs/" element={<Home />} />
              <Route path="dogs/login/*" element={<Login />} />
              <Route
                path="dogs/conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="dogs/foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NaoEncontrada />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </Router>
    </div>
  );
}

export default App;
