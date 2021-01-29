import React, { useState } from "react";
// import "./sidebarThemeModal.css";

function SidebarThemeModal({
  displayThemeMenu,
  displayModalWindow,
  setDisplayThemeMenu,
  setDisplayModalWindow,
  sidebarBackgroundColor,
  setSidebarBackgroundColor,
  sidebarTextColor,
  setSidebarTextColor,
  displaySidebarModal,
  setDisplaySidebarModal,
  todosData,
}) {
  console.log(todosData);
  const [textColor, setTextColor] = useState("");
  const [backGroundColor, setBackGroundColor] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    setSidebarBackgroundColor(backGroundColor);
    setSidebarTextColor(textColor);
  };
  let onReset = () => {
    setSidebarBackgroundColor("");
    setSidebarTextColor("");
  };
  return (
    <div
      style={{
        backgroundColor: sidebarBackgroundColor,
      }}
      className={
        displayModalWindow
          ? "secondaryThemeModalWrapper"
          : "secondaryThemeModalWrapper Hide"
      }
    >
      <form onSubmit={onSubmit}>
        <p>Sidebar theme change</p>
        <label
          className="inputBackgroundColorWrapper"
          style={{ color: sidebarTextColor }}
        >
          Background color:
          <input
            type="color"
            value={backGroundColor}
            onChange={(e) => setBackGroundColor(e.target.value)}
          />
        </label>
        <br />
        <label
          className="inputTextColorWrapper"
          style={{ color: sidebarTextColor }}
        >
          Text color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
        <br />
        <input className="modalWindowSubmitButton" type="submit" value="Submit" />
        <input
          className="modalWindowResetButton"
          type="reset"
          value="Reset"
          onClick={onReset}
        />
        <input
          className="modalWindowBackButton"
          type="button"
          value="Back"
          onClick={() => {
            setDisplayThemeMenu(!displayThemeMenu);
            setDisplayModalWindow(!displayModalWindow);
          }}
        />
      </form>
      {/*  <button
        // style={{ backgroundColor: backgroundColor }}
        className="secondaryThemeModalBackButton"
        onClick={() => {
          setDisplayThemeMenu(!displayThemeMenu);
          setDisplaySidebarModal(!displaySidebarModal);
        }}
      >
        Back
      </button> */}
    </div>
  );
}

export default SidebarThemeModal;
