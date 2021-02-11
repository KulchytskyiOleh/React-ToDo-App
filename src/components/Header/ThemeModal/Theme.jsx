import React, { useState } from "react";
function Theme({ displayThemeMenu, setDisplayThemeMenu }) {
  return (
    <div className="themeModal">
      {
        <div>
          <button
            className="themeModalButton"
            onClick={() => {
              setDisplayThemeMenu(() => !displayThemeMenu);
            }}
          >
            {displayThemeMenu ? (
              <i className="fa fa-sun-o"> Light theme</i>
            ) : (
              <i className="fa fa-moon-o"> Dark theme</i>
            )}
          </button>
        </div>
      }
    </div>
  );
}

export default Theme;
