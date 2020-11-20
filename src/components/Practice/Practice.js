import React from "react";
import TodoItem from "./TodoItem";
// import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import Status from "../Status/Status";

class Practice extends React.Component {
  constructor({ addTodo, todosData }) {
    super();
    this.newTodoItem = React.createRef();
    this.searchTodoItem = React.createRef();

    this.state = {
      search: "",
      value: "",
      status: "all",
      showButton: false,
      currentItemId: 0,
      addTodos: addTodo,
      todos: todosData,
      completed: "",
      uncompleted: "",
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        todo.completed = todo.id === id ? !todo.completed : todo.completed;
        return todo;
      }),
    }));
  };

  addTodo = () => {
    this.setState((prevState) => {
      let success = true;
      let messageErrors = "";

      if (this.newTodoItem.current.value.length === 0) {
        success = false;
        messageErrors = "Please enter your todo";
      }

      prevState.todos.map((item) => {
        if (item.text === this.newTodoItem.current.value) {
          success = false;
          messageErrors = "This element already exists";
        }
        return true;
      });

      if (success) {
        if (
          prevState.addTodos(this.newTodoItem.current.value, this.state.todos)
        ) {
          this.newTodoItem.current.value = "";
        }
      } else {
        alert(messageErrors);
      }
      return true;
    });
  };

  saveEditedText = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = this.newTodoItem.current.value;
          this.newTodoItem.current.value = "";
        }
        return todo;
      }),
      currentItemId: id,
    }));
  };

  textEdit = (id) => {
    this.setState({ currentItemId: id });
    this.state.todos.filter((item) =>
      item.id === id ? (this.newTodoItem.current.value = item.text) : null
    );
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => (todo.id !== id ? todo : null)),
    }));
  };

  showAllTodos = () => {
    if (this.state.status === "uncompleted") {
      this.state.todos.filter((item) =>
        item.completed === false ? console.log(item) : null
      );
    } else if (this.state.status === "completed")
      this.state.todos.filter((item) =>
        item.completed === true ? console.log(item) : null
      );
    else if (this.state.status === "all") return console.log(this.state.todos);
  };

  componentDidUpdate() {
    this.showAllTodos();
    console.log("update");
  }

  toggleButton = (showButton) => this.setState({ showButton });

  statusSwitchHandler = (status) => this.setState({ status });

  handleSearch = (search) => this.setState({ search });

  displayFilteredItems = () => {
    return this.state.todos
      .filter((item) =>
        item.text.toLowerCase().includes(this.state.search.trim().toLowerCase())
      )
      .map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleChange={this.handleChange}
          deleteItem={this.deleteItem}
          textEdit={this.textEdit}
          showButton={this.state.showButton}
          currentItemId={this.state.currentItemId}
          toggleButton={this.toggleButton}
        />
      ));
  };

  render() {
    /* const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        deleteItem={this.deleteItem}
        textEdit={this.textEdit}
        showButton={this.state.showButton}
        currentItemId={this.state.currentItemId}
        toggleButton={this.toggleButton}
      /> 
    ));*/
    return (
      <div className="practice">
        <div className="item_insert">
          <input
            className="input inputTodoText"
            type="text"
            ref={this.newTodoItem}
            placeholder="Add some new todo here..."
            required
          />

          <>
            {this.state.showButton ? (
              <button
                className={`${"button"} ${"saveEditedText"} ${
                  this.state.showButton ? "showButton" : "hideButton"
                }`}
                onClick={() => {
                  this.saveEditedText(this.state.currentItemId);
                  this.toggleButton();
                }}
              >
                <i className="far fa-save"> SAVE </i>
              </button>
            ) : (
              <button
                className={`${"button"} ${"add-button"} ${
                  this.showButton && this.state.currentItemId === this.item.id
                    ? "hideButton"
                    : "showButton"
                }`}
                type="button"
                onClick={this.addTodo}
              >
                <i className="fas fa-plus-square"></i> ADD
              </button>
            )}
          </>
          <br />
          <>
            <Status statusSwitchHandler={this.statusSwitchHandler} />
          </>

          <Search onSearch={this.handleSearch} />
        </div>

        <div className="todo-items">{this.displayFilteredItems()}</div>
        {/* <Pagination todos={this.state.todos} /> */}
      </div>
    );
  }
}

export default Practice;
