import React, { useState } from "react";
import ThemeModalWindow from "./themeModalWindow/ThemeModalWindow";
function Theme({
  displayThemeMenu,
  setDisplayThemeMenu,
  displayModalWindow,
  setDisplayModalWindow,
  todosData,
}) {
  // console.log(todosData);
  return (
    <div className="themeModal">
      {
        <div>
          <button
            className="themeModalButton"
            onClick={() => {
              setDisplayThemeMenu(() => !displayThemeMenu);
              // setDisplayModalWindow(() => !displayModalWindow);
            }}
          >
            <i className="fas fa-cog" /> Change theme
          </button>
          <ThemeModalWindow
            todosData={todosData}
            displayThemeMenu={displayThemeMenu}
            setDisplayThemeMenu={setDisplayThemeMenu}
            displayModalWindow={displayModalWindow}
            setDisplayModalWindow={setDisplayModalWindow}
          />
        </div>
      }
    </div>
  );
}

export default Theme;
