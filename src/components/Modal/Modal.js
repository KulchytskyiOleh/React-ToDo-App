import React, { useState} from "react";

import Modal from "react-modal";
import "./Modal.css";

function ModalWrapper({ modal, setModal }) {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  let userNameInputHandler = (e) => setUserName(e.target.value);
  let messageInputHandler = (e) => setMessage(e.target.value);
  let emailInputHandler = (e) => setEmail(e.target.value);
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

  return (
    <Modal
      isOpen={modal}
      onRequestClose={modal}
      className="Modal"
    >
      <div className="Modal">
        <div className="modalWrapper">
          <form className="modalWrapperForm">
            <h1 className="Contact">Contact</h1>
            <div className="userNameWrapper">
              <label className="nameTitle">Username</label>
              <input
                className="userNameInput inputModal"
                required
                value={userName}
                type="text"
                name="Username"
                id="Username"
                onChange={userNameInputHandler}
              />
            </div>

            <div className="messageWrapper">
              <label className="messageTitle">Message</label>
              <input
                className="messageInput inputModal"
                required
                value={message}
                type="teaxtarea"
                name="Message"
                id="Message"
                onChange={messageInputHandler}
              />
            </div>

            <div className="emailWrapper">
              <label className="emailTitle">Email</label>
              <input
                className="emailInput inputModal"
                required
                value={email}
                type="email"
                name="Email"
                id="Email"
                onChange={emailInputHandler}
              />
            </div>
          </form>
          <div className="modalWrapperButtons">
            <button
              className="submitButton modalButton"
              onClick={() => submitHandler()}
            >
              SUBMIT
            </button>
            <button
              className="resetButton modalButton"
              onClick={() => resetHandler()}
            >
              RESET
            </button>
            <button
              className="closeButton modalButton"
              onClick={() => closeModalHandler()}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalWrapper;
