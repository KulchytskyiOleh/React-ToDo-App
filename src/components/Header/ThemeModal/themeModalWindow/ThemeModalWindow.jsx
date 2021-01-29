import React, { useState } from "react";
import SidebarThemeModal from "../sidebarThemeModal/SidebarThemeModal";
// import HeaderThemeModal from "../headerThemeModal/HeaderThemeModal";
import "./themeModalWindow.css";
function ThemeModalWindow({
  displayThemeMenu,
  setDisplayThemeMenu,
  displayModalWindow,
  setDisplayModalWindow,
}) {
  const [sidebarBackgroundColor, setSidebarBackgroundColor] = useState("");
  const [sidebarTextColor, setSidebarTextColor] = useState("");
  const [displaySidebarModal, setDisplaySidebarModal] = useState(false);
  // const [headerBackgroundColor, setHeaderBackgroundColor] = useState("");
  // const [headerTextColor, setHeaderTextColor] = useState("");
  // const [displayHeaderModal, setDisplayHeaderModal] = useState(false);
  // console.log(displayThemeMenu, " themeModal_displayThemeMenu_1");
  // console.log(displayModalWindow, "themeModal_displayModalWindow_1");
  return (
    <>
      <div
        className={
          displayThemeMenu
            ? "mainThemeModalWindowWrapper"
            : "mainThemeModalWindowWrapper Hide"
        }
      >
        <button
          className="sidebarThemeModal"
          value="SidebarThemeModal"
          onClick={() => {
            setDisplayThemeMenu(!displayThemeMenu);
            // setDisplaySidebarModal(!displaySidebarModal);
            setDisplayModalWindow(!displayModalWindow);
          }}
        >
          Sidebar
        </button>
        <button
          className="headerThemeModal"
          value="HeaderThemeModal"
          // onClick={() => {
          //   setDisplayModalWindow(!displayModalWindow);
          //   setDisplayThemeMenu(!displayThemeMenu);
          // }}
        >
          Header
        </button>
        <button
          className="backgroundThemeModal"
          value="BackgroundThemeModal"
          onClick={() => {}}
        >
          Background
        </button>
        <button
          className="textThemeModal"
          value="TextThemeModal"
          onClick={() => {}}
        >
          Text
        </button>
        <button onClick={() => setDisplayThemeMenu(!displayThemeMenu)}>
          Exit
        </button>
      </div>
      <>
        {displayModalWindow ? (
          <SidebarThemeModal
            displayThemeMenu={displayThemeMenu}
            setDisplayThemeMenu={setDisplayThemeMenu}
            displayModalWindow={displayModalWindow}
            displaySidebarModal={displaySidebarModal}
            setDisplaySidebarModal={setDisplaySidebarModal}
            setDisplayModalWindow={setDisplayModalWindow}
            sidebarBackgroundColor={sidebarBackgroundColor}
            setSidebarBackgroundColor={setSidebarBackgroundColor}
            sidebarTextColor={sidebarTextColor}
            setSidebarTextColor={setSidebarTextColor}
          />
        ) : null}

        {/* <HeaderThemeModal
          displayThemeMenu={displayThemeMenu}
          setDisplayThemeMenu={setDisplayThemeMenu}
          displayModalWindow={displayModalWindow}
          setDisplayModalWindow={setDisplayModalWindow}
          headerBackgroundColor={headerBackgroundColor}
          setHeaderBackgroundColor={setHeaderBackgroundColor}
          headerTextColor={headerTextColor}
          setHeaderTextColor={setHeaderTextColor}
        /> */}
      </>
    </>
  );
}

export default ThemeModalWindow;
