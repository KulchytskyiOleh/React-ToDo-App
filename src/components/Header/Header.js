import React, { useContext } from "react";
import "./Header.css";
import Theme from "./ThemeModal/Theme";
import ThemeContext from "../Header/theme-context";
let Header = ({ toggleTheme }) => {
  const themes = useContext(ThemeContext);
  return (
    <header className={`${"header"} ${themes["header.wrapper"]}`}>
      <h2 className="headerSlogan">React ToDo App</h2>
      <Theme theme={themes} toggleTheme={toggleTheme} />
    </header>
  );
};
export default Header;
