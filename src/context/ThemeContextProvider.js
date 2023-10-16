import React, { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const darkTheme = () => {
    setTheme("dark");
  };

  const lightTheme = () => {
    setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{theme, darkTheme, lightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
