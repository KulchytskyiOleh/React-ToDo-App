import React, { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App({ todosData, contacts, Categories, month }) {
  const [displayThemeMenu, setDisplayThemeMenu] = useState(false);
  const [displayModalWindow, setDisplayModalWindow] = useState(false);

  return (
    <div className="App">
      <Header
        displayThemeMenu={displayThemeMenu}
        setDisplayThemeMenu={setDisplayThemeMenu}
        displayModalWindow={displayModalWindow}
        setDisplayModalWindow={setDisplayModalWindow}
        todosData={todosData}
      />
      <>
        <Content
          className="content"
          todosData={todosData}
          Categories={Categories}
          month={month}
        />
      </>
      <Footer contacts={contacts} />
    </div>
  );
}
export default App;
