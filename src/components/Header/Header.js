import React, { useState } from "react";
import "./Header.css";
import Theme from "./ThemeModal/Theme";
// import ThemeModalWindow from "./ThemeModal/themeModalWindow/themeModalWindow";
let Header = ({
  displayThemeMenu,
  setDisplayThemeMenu,
  displayModalWindow,
  setDisplayModalWindow,
  todosData,
}) => {
  return (
    <header className="header">
      <>
        <span className="headerSlogan">React ToDo App</span>
        <Theme
          todosData={todosData}
          displayThemeMenu={displayThemeMenu}
          setDisplayThemeMenu={setDisplayThemeMenu}
          displayModalWindow={displayModalWindow}
          setDisplayModalWindow={setDisplayModalWindow}
        />
      </>
    </header>
  );
};
export default Header;
