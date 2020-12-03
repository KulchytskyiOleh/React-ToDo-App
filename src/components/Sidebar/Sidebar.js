import React, { useState, useEffect, useRef } from "react";
import "./Sidebar";
import Modal from "../Modal/Modal";
export default function Sidebar({
  showSideBar,
  showModal,
  status,
  statusSwitchHandler,
}) {
  const [sidebar, setSidebar] = useState(showSideBar);
  const [modal, setModal] = useState(showModal);
  let sidebarToggleHandler = () => setSidebar(() => !sidebar);
  let modalToggleHandler = () => setModal(() => !modal);
  const allTodos = useRef(null);
  const uncompletedTodos = useRef(null);
  const completedTodos = useRef(null);
  // let statusHandler = (e) => statusSwitchHandler(e.target.value);

  useEffect(() => {
    if (status === "completed") {
      return setSidebar(null);
    } else if (status === "uncompleted") {
      return setSidebar(null);
    } else if (status === "all") {
      return;
    }
  }, [status]);

  return (
    <>
      <button
        value="all"
        className="menu-bars"
        ref={allTodos}
        onClick={() => {
          sidebarToggleHandler();
          setModal("");
          statusSwitchHandler(allTodos.current.value);
        }}
      >
        <i className={sidebar ? "fa fa-times" : "fa fa-bars"}></i>
      </button>
      <aside className={`${sidebar ? "sidebar active" : "sidebar"}`}>
        <div className="sidebar-items">
          <button
            value="uncompleted"
            ref={uncompletedTodos}
            // onClick={statusHandler}
            onClick={() => statusSwitchHandler(uncompletedTodos.current.value)}
          >
            Active todos
          </button>
          <button
            value="completed"
            ref={completedTodos}
            // onClick={statusHandler}
            onClick={() => statusSwitchHandler(completedTodos.current.value)}
          >
            Completed todos
          </button>

          <button
            onClick={() => {
              modalToggleHandler();
              setSidebar(() => !sidebar);
            }}
          >
            Contact us
          </button>
        </div>
      </aside>
      {modal ? <Modal modal={modal} setModal={setModal} /> : null}
    </>
  );
}
