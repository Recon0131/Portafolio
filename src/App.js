import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Social from "./components/Social";
import Email from "./components/Email.jsx";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { useEffect, useState } from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <div className=" m-auto grid max-w-3xl my-20 gap-10 relative dark:bg-background-color">
      <button onClick={handleChangeTheme}>
        {theme === "dark" ? (
          <NightlightIcon
            fontSize="large"
            className=" absolute right-0 -top-10 dark:text-white "
          />
        ) : (
          <Brightness7Icon
            fontSize="large"
            className=" absolute right-0 -top-10 text-zinc-600"
          />
        )}
      </button>
      <Inicio />
      <hr className=" border border-gray-600 rounded-md" />
      <Proyectos />
      <hr className=" border border-gray-600 rounded-md" />
      <Social />
      <hr className=" border border-gray-600 rounded-md" />
      <Email />
    </div>
  );
}

export default App;
