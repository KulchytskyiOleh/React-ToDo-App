import React /* useState */ from "react";
import "./Header.css";
import Theme from "./ThemeModal/Theme";
let Header = ({ displayThemeMenu, setDisplayThemeMenu }) => {
  return (
    <header className="header">
      <>
        <span className="headerSlogan">React ToDo App</span>
        <Theme
          displayThemeMenu={displayThemeMenu}
          setDisplayThemeMenu={setDisplayThemeMenu}
        />
      </>
    </header>
  );
};
export default Header;
