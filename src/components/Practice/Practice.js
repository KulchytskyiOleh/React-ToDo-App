import React from "react";
import TodoItem from "./TodoItem";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import Status from "../Status/Status";

class Practice extends React.Component {
  constructor(props) {
    super();
    this.newTodoItem = React.createRef();
    this.searchTodoItem = React.createRef();
    this.state = {
      search: "",
      value: "",
      showButton: false,
      currentItemId: 0,
      addTodos: props.addTodo,
      todos: props.todosData,
      filterChecked: false,
      filterUnChecked: false,
    };
  }

  showButtonStyle = {
    hide: { display: "none" },
    show: { display: "block" },
  };

  /*  todo.completed = todo.id === id ? !todo.completed : todo.completed; */
  handleChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: (this.updatedTodos = prevState.todos.map((todo) => {
          todo.completed = todo.id === id ? !todo.completed : todo.completed;
          return todo;
        })),
      };
    });
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
    this.setState((prevState) => {
      prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = this.newTodoItem.current.value;
          this.newTodoItem.current.value = "";
          return todo;
        }
        return true;
      });
      return {
        todos: prevState.todos,
        currentItemId: id,
      };
    });
  };

  textEdit = (id) => {
    this.setState({ currentItemId: id });
    this.state.todos.filter((item) =>
      item.id === id ? (this.newTodoItem.current.value = item.text) : null
    );
  };

  deleteItem = (id) => {
    this.setState((prevState) => {
      return {
        todos: (this.deletedTodos = prevState.todos.filter((todo) =>
          todo.id !== id ? todo : null
        )),
      };
    });
  };

  countTodos = () => this.state.todos.length;

  toggleButton = (value) => this.setState({ showButton: value });

  handleSearch = (search) => {
    this.setState({ search });
    if (!search) {
      return console.log(this.state.todos);
    }
    console.log("------");
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(search.trim().toLowerCase())
        ? console.log(todo.text, `${search}`)
        : todo
    );
  };

  statusSwitchHandler = (value) => {
    this.setState(
      (prevState) => (prevState.value = "hello from main component")
    );
  };

  render() {
    const todoItems = this.state.todos.map((item) => (
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
                style={
                  this.state.showButton
                    ? this.showButtonStyle.show
                    : this.showButtonStyle.hide
                }
                className="button saveEditedText"
                onClick={() => {
                  this.saveEditedText(this.state.currentItemId);
                  this.toggleButton();
                }}
              >
                <i className="far fa-save"> SAVE </i>
              </button>
            ) : (
              <button
                className="button add-button"
                style={
                  this.showButton && this.state.currentItemId === this.item.id
                    ? this.showButtonStyle.hide
                    : this.showButtonStyle.show
                }
                type="button"
                onClick={this.addTodo}
              >
                <i className="fas fa-plus-square"></i> ADD
              </button>
            )}
          </>
          <br />
          <>
            <Status
              state={this.state.todos}
              statusSwitchHandler={this.statusSwitchHandler}
            />
          </>
          <Search onSearch={this.handleSearch} />
        </div>
        <br />
        <div className="todo-items">{todoItems}</div>
        <Pagination countTodos={this.countTodos()} />
      </div>
    );
  }
}

export default Practice;
