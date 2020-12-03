import React, { useState, useEffect } from "react";
import { useRef } from "react";

import "./Modal.css";

function Modal({ modal, setModal }) {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  let userNameInputHandler = (e) => setUserName(e.target.value);
  let messageInputHandler = (e) => setMessage(e.target.value);
  let emailInputHandler = (e) => setEmail(e.target.value);
  const userNameInput = useRef(null);

  let submitHandler = () => {
    if (userName === "" || message === "" || email === "") {
      alert("please fill in all the lines");
    } else {
      let userData = {
        userName,
        message,
        email,
      };
      localStorage.setItem(`${userName}`, JSON.stringify(userData));
      setUserName("");
      setMessage("");
      setEmail("");
    }
  };

  let resetHandler = () => {
    setUserName("");
    setMessage("");
    setEmail("");
  };

  let closeModalHandler = () => {
    setModal(!modal);
  };
  useEffect(() => {
    userNameInput.current.focus();
  }, [userNameInput]);

  return (
    <div className="Modal">
      <div className="modalWrapper">
        <form className="modalWrapperForm">
          <label>
            Username:
            <input
              ref={userNameInput}
              required
              value={userName}
              type="text"
              name="Username"
              id="Username"
              onChange={userNameInputHandler}
            />
          </label>
          <br />
          <label>
            Message:
            <input
              required
              value={message}
              type="text"
              name="Message"
              id="Message"
              onChange={messageInputHandler}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              required
              value={email}
              type="email"
              name="Email"
              id="Email"
              onChange={emailInputHandler}
            />
          </label>
        </form>
        <div className="modalWrapperButtons">
          <button onClick={() => submitHandler()}>
            <i className="fa fa-check" aria-hidden="true"></i>
          </button>
          <button onClick={() => resetHandler()}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
          <button onClick={() => closeModalHandler()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
