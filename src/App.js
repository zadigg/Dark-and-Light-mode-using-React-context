import React, { useState, useEffect } from "react";
import { useStateContext } from "./context/ThemeContext";

function App() {
  const { darkMode, toggleDarkMode } = useStateContext();
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div>
      <div
        className={` min-h-screen  flex flex-col items-start text-gray-900 antialiased relative ${
          darkMode ? "bg-slate-900" : "bg-green-900"
        } `}
      >
        <div className="z-10 flex justify-end w-full pr-5">
          <button
            onClick={handleClick}
            className={` px-3 py-1 rounded-md mt-3 ${
              darkMode ? "bg-gray-300" : "bg-slate-900 text-slate-200"
            }`}
          >
            {darkMode ? "💡 light" : "🌙 dark"}
          </button>
        </div>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
            height: "34rem",
          }}
          className={`absolute  inset-x-0 top-0 ${
            darkMode ? "bg-slate-800" : "bg-green-800"
          }`}
        ></div>
        <div className="mx-auto z-10 mt-48 text-center">{/* hello */}</div>
      </div>
    </div>
  );
}

export default App;
