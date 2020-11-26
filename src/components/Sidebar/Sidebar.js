import React, { useState } from "react";
import "./Sidebar";
import Modal from "../Modal/Modal";
export default function Sidebar({ showSideBar, showModal }) {
  const [sidebar, setSidebar] = useState(showSideBar);
  const [modal, setModal] = useState(showModal);
  let sidebarToggleHandler = () => setSidebar(() => !sidebar);
  let modalToggleHandler = () => setModal(() => !modal);

  return (
    <>
      <button
        className="menu-bars"
        onClick={() => {
          sidebarToggleHandler();
          setModal("");
        }}
      >
        <i className={sidebar ? "fa fa-times" : "fa fa-bars"}></i>
      </button>
      <aside className={`${sidebar ? "sidebar active" : "sidebar"}`}>
        <div className="sidebar-items">
          <button>Active todos</button>
          <button>Completed todos</button>
          <button
            onClick={() => {
              modalToggleHandler();
            }}
          >
            Contact us
          </button>
        </div>
      </aside>
      {sidebar && modal ? <Modal modal={modal} setModal={setModal} /> : null}
    </>
  );
}
