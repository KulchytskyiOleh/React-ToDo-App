import React from "react";

function Info(props) {
  return (
    <div>
      <div>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
      <div>
        <p>
          Linkedin:
          <a href={props.social}>
            Oleh Kulchytskyi
          </a>
        </p>
        <p>&copy; by Oleh Kulchytskyi</p>
      </div>
    </div>
  );
}
export default Info;
