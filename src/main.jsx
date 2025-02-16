import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Jizda from "./Jizda";

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jizda" element={<Jizda />} />
      </Routes>
    </Router>
  );
}
