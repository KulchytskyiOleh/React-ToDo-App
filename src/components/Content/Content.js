import React, { useContext } from "react";
import "./Content.css";
import Practice from "../Practice/Practice";
import ThemeContext from "../Header/theme-context";

function Content({ todosData, Categories, month }) {
  const themes = useContext(ThemeContext);
  return (
    <main className={`${"content"} ${themes["content.wrapper"]}`}>
      <Practice todosData={todosData} Categories={Categories} month={month} />
    </main>
  );
}
export default Content;
