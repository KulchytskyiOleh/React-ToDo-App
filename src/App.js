import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
function App({ todosData, addTodo, contacts }) {
  return (
    <div className="App">
      <Header />
      <Content className="content" todosData={todosData} addTodo={addTodo} />
      <Footer contacts={contacts} />
    </div>
  );
}
export default App;
