import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main"; // Správný import
import "./index.css"; // Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
