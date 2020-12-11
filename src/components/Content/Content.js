import React from "react";
import "./Content.css";
import Practice from "../Practice/Practice";

function Content({ todosData, Categories }) {
  return (
    <main className="content">
      <Practice todosData={todosData} Categories={Categories} />
    </main>
  );
}
export default Content;
