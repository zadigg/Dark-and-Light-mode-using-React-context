import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const ThemeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Context.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
