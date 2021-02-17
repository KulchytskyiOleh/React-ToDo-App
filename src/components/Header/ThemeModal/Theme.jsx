import React, { useContext } from "react";
import ThemeContext from "../theme-context";

function Theme({ toggleTheme }) {
  const themes = useContext(ThemeContext);
  return (
    <div className="themeModal">
      <button
        className="themeModalButton"
        onClick={toggleTheme}
        title={`Switch to ${themes.show ? "light" : "dark"} theme`}
      >
        <i
          className={`${
            themes.show ? "fas fa-sun fa-lg" : "fas fa-moon fa-lg"
          } ${"buttonIcons"} ${themes.button}`}
        />
      </button>
    </div>
  );
}

export default Theme;
