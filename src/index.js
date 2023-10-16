import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/ThemeContextProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
