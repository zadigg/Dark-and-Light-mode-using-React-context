import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContext } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContext>
);
