import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
/*-e-*/
function App(props) {
  return (
    <div className="App">
      <Header />
      <Content
        className="content"
        todosData={props.todosData}
        addTodo={props.addTodo}
      />
      <Footer contacts={props.contacts} />
    </div>
  );
}
export default App;
