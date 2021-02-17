import React from "react";

export const ViewChangeButton = ({ view, viewToggle }) => {
  return (
    <button
      className="viewChangeButton"
      title={`Switch to ${view ? "list" : "grid"} view`}
      onClick={viewToggle}
    >
      <i className={view ? "fas fa-list fa-lg" : " fas fa-th fa-lg "} />
    </button>
  );
};
