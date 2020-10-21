import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <div className="App">
      <Header/>
      <Content todosData={props.todosData} addTodo={props.addTodo} />
      <Footer contacts={props.contacts} />
    </div>
  );
}
export default App;
