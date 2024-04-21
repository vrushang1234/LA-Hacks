import React, { createContext, useContext, useState } from "react";
import Login from "./Components/SignUp-Login/Login";
import Navbar from "./Components/NavBar/Navbar";
import SignUp from "./Components/SignUp-Login/SignUp";
import Homepage from "./Components/Homepage/Homepage";
import PlayNow from "./Components/PlayNow/PlayNow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const UserContext = createContext();

export default function App() {
  const [userdata, setUserData] = useState({
    username: "Vrushang",
    email: "vrushangnand20@gmail.com",
    age: 19,
    points: 30,
    visited: 0,
  });

  return (
    <div className="app">
      <UserContext.Provider value={{ userdata, setUserData }}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/play" element={<PlayNow />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
