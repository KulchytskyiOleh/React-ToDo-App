import React from "react";

export const themes = {
  light: {
    "header.wrapper": "header--light",
    "sidebar.wrapper": "sidebar--light",
    "content.wrapper": "content--light",
    button: "button--light",
    show: false,
  },
  dark: {
    "header.wrapper": "header--dark",
    "sidebar.wrapper": "sidebar--dark",
    "content.wrapper": "content--dark",
    button: "button--dark",
    show: true,
  },
};

const ThemeContext = React.createContext(themes);
export default ThemeContext;
