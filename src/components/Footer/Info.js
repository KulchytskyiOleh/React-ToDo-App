import React from "react";

function Info(props) {
  return (
    <>
      <>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </>
      <>
        <p>
          Linkedin:
          <a className="Linkedin" href={props.social}>Oleh Kulchytskyi</a>
        </p>
        <p>&copy; by Oleh Kulchytskyi</p>
      </>
    </>
  );
}
export default Info;

