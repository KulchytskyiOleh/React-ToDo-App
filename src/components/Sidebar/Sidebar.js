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
  const uncompletedTodos = useRef(null);
  const completedTodos = useRef(null);
  const allTodos = useRef(null);
  const [displayAllTodos, setDisplayAllTodos] = useState(true);
  let sidebarToggleHandler = () => setSidebar(() => !sidebar);
  let modalToggleHandler = () => setModal(() => !modal);
  // let statusHandler = (e) => statusSwitchHandler(e.target.value);
  let allTodosToggleHandler = () => {
    setDisplayAllTodos(!displayAllTodos);
  };

  useEffect(() => {
    if (status === "completed") {
      return setSidebar(null);
    } else if (status === "uncompleted") {
      return setSidebar(null);
    } else if (status === "all") {
      return setSidebar(null);
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
        }}
      >
        <i className={sidebar ? "fa fa-times" : "fa fa-bars"}></i>
      </button>
      <aside className={`${sidebar ? "sidebar active" : "sidebar"}`}>
        <div className="sidebar-items">
          <button
            value="uncompleted"
            ref={uncompletedTodos}
            onClick={() => {
              statusSwitchHandler(
                displayAllTodos
                  ? uncompletedTodos.current.value
                  : allTodos.current.value
              );
              allTodosToggleHandler();
            }}
          >
            Active todos
          </button>
          <button
            value="completed"
            ref={completedTodos}
            onClick={() => {
              statusSwitchHandler(
                displayAllTodos
                  ? completedTodos.current.value
                  : allTodos.current.value
              );
              allTodosToggleHandler();
            }}
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
