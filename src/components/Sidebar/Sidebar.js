import React, { useState, useEffect, useRef, useContext } from "react";
import "./Sidebar.css";
import ModalWrapper from "../Modal/Modal";
import ThemeContext from "../Header/theme-context";
export default function Sidebar({
  status,
  showModal,
  showSideBar,
  statusSwitchHandler,
}) {
  const uncompletedTodos = useRef(null);
  const completedTodos = useRef(null);
  const allTodos = useRef(null);
  const [displayAllTodos, setDisplayAllTodos] = useState(true);
  const [sidebar, setSidebar] = useState(showSideBar);
  const [modal, setModal] = useState(showModal);
  const themes = useContext(ThemeContext);

  let sidebarToggleHandler = () => setSidebar(() => !sidebar);
  let modalToggleHandler = () => setModal(() => !modal);
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
        <i
          className={`${sidebar ? "fa fa-times fa-2x" : "fa fa-bars fa-2x"} ${
            themes.button
          }`}
        />
      </button>
      <aside
        className={`${sidebar ? "sidebar active" : "sidebar"} ${
          themes["sidebar.wrapper"]
        } `}
      >
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
      {modal ? <ModalWrapper modal={modal} setModal={setModal} /> : null}
    </>
  );
}
