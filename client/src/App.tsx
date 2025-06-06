import { useState } from "react";

import "./App.css";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { NewPost } from "./pages/NewPost";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
