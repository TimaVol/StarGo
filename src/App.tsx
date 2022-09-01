import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "./pages/User";
import Users from "./pages/Users";
import "./styles/App.scss";
export default function App() {
  return (
    <div className="appWrap">
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  );
}
