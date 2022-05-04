import React, { useState, useEffect } from "react";
import { useStateContext } from "./context/ThemeContext";

function App() {
  const { darkMode, toggleDarkMode } = useStateContext();
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div
      className={`h-screen flex items-center justify-center ${
        darkMode ? "bg-slate-900   text-slate-400" : "bg-gray-200"
      }`}
    >
      <div>
        <button onClick={handleClick}>{darkMode ? "dark" : "light"}</button>
      </div>
    </div>
  );
}

export default App;
