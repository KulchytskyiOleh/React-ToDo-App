import React from "react";

function Theme({ themeHandler, themeSwitchHandler }) {
  return (
    <div>
      {themeHandler ? (
        <button onClick={() => themeSwitchHandler(() => !themeHandler)}>
          <i className="fa fa-moon-o">Dark theme</i>
        </button>
      ) : (
        <button onClick={() => themeSwitchHandler(() => !themeHandler)}>
          <i className="fa fa-sun-o">Light theme</i>
        </button>
      )}
    </div>
  );
}

export default Theme;
