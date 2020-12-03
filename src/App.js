import React, { useState } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App({ todosData, contacts }) {
  const [theme, setTheme] = useState(false);
  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme}/>
      <>
        <Content className="content" todosData={todosData} />
      </>
      <Footer contacts={contacts} />
    </div>
  );
}
export default App;
