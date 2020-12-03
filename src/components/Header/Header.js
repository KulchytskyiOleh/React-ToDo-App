import React from "react";
import "./Header.css";
// import Theme from "./Theme";

let Header = ({ theme, setTheme }) => {
  return (
    <header className="header">
      <>
        <p>React ToDo App</p>
        {/* <Theme themeHandler={theme} themeSwitchHandler={setTheme} /> */}
      </>
    </header>
  );
};
export default Header;
