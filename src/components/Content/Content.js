import React from "react";
import "./Content.css";
import Practice from "../Practice/Practice";

function Content({ todosData, Categories, month }) {
  return (
    <main className="content">
      <Practice todosData={todosData} Categories={Categories} month={month} />
    </main>
  );
}
export default Content;
