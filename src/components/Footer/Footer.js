import React from "react";
import "./Footer.css";
import Info from "./Info";

function Footer(props) {
  const about = props.contacts.map((item, index) => (
    <Info
      key={index}
      phone={item.tel.phone}
      email={item.social.email}
      social={item.social.linkedin}
      /* about_name={item.about.name}
      about_surname={item.about.surname} */
    />
  ));
  return <footer>{about}</footer>;
}

export default Footer;
