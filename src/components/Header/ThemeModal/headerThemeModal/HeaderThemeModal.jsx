import React, { useState } from "react";

function HeaderThemeModal({
  displayThemeMenu,
  displayModalWindow,
  setDisplayThemeMenu,
  setDisplayModalWindow,
  headerBackgroundColor,
  setHeaderBackgroundColor,
  headerTextColor,
  setHeaderTextColor,
}) {
  const [textColor, setTextColor] = useState();
  const [backGroundColor, setBackGroundColor] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();
    setHeaderBackgroundColor(backGroundColor);
    setHeaderTextColor(textColor);
  };
  let onReset = () => {
    setHeaderBackgroundColor("");
    setHeaderTextColor("");
  };
  return (
    <div
      style={{
        backgroundColor: headerBackgroundColor,
      }}
      className={
        displayModalWindow
          ? "secondaryThemeModalWrapper"
          : "secondaryThemeModalWrapper Hide"
      }
    >
      <form onSubmit={onSubmit}>
        <p>Header theme change</p>
        <label
          className="inputBackgroundColorWrapper"
          style={{ color: headerTextColor }}
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
          style={{ color: headerTextColor }}
        >
          Text color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" onClick={onReset} />
      </form>
      <button
        // style={{ backgroundColor: backgroundColor }}
        className="secondaryThemeModalBackButton"
        onClick={() => {
          setDisplayThemeMenu(!displayThemeMenu);
          setDisplayModalWindow(!displayModalWindow);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default HeaderThemeModal;
