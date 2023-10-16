import "./App.css";
import { useContext, useEffect } from "react";
import Card from "./components/Card";
import { ThemeContext } from "./context/ThemeContextProvider";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  // console.log(theme);

  return (
    <div className="bg-slate-300 h-80 dark:bg-black">
      <h1 className="text-3xl font-bold underline m-2 text-black dark:text-white">
        Dark Mode...!!
      </h1>
      <Card />
    </div>
  );
}

export default App;
