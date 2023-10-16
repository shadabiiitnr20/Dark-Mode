import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const Card = () => {
  const { theme, darkTheme, lightTheme } = useContext(ThemeContext);

  const toggleDarkTheme = () => {
    darkTheme();
  };

  const toggleLightTheme = () => {
    lightTheme();
  };

  return (
    <div className="border border-solid border-black p-3 mx-3 text-black dark:text-white">
      Card
      <div>
        {theme === "light" ? (
          <button
            className="p-2 m-2 bg-slate-700 dark:bg-red-700"
            onClick={toggleDarkTheme}
          >
            Dark
          </button>
        ) : (
          <button
            className="p-2 m-2 bg-slate-700 dark:bg-red-700"
            onClick={toggleLightTheme}
          >
            Light
          </button>
        )}

        <p className="text-balck dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
};

export default Card;
