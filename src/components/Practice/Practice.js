import React from "react";
import TodoItem from "./TodoItem";
import Pagination from "../Pagination/Pagination";

class Practice extends React.Component {
  constructor(props) {
    super();
    this.newTodoItem = React.createRef();
    this.state = {
      showButton: false,
      currentItemId: 0,
      addTodos: props.addTodo,
      todos: props.todosData,
    };
  }

  saveStyle = {
    hide: { display: "none" },
    show: { display: "block" },
  };

  /*  todo.completed = todo.id === id ? !todo.completed : todo.completed; */
  handleChange = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
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
    this.setState({
      currentItemId: id,
    });
    this.state.todos.filter((item) => {
      if (item.id === id) {
        this.newTodoItem.current.value = item.text;
      }
      return true;
    });
  };

  deleteItem = (id) => {
    this.setState((prevState) => {
      let deletedTodos = prevState.todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return "";
      });
      return {
        todos: deletedTodos,
      };
    });
  };

  countTodos = () => this.state.todos.length;

  toggleButton = (value) => this.setState({ showButton: value });

  render() {
    const todoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
        deleteItem={this.deleteItem}
        textEdit={this.textEdit}
        saveEditedText={this.saveEditedText}
        showButton={this.state.showButton}
        currentItemId={this.state.currentItemId}
        toggleButton={this.toggleButton}
      />
    ));
    return (
      <div className="practice">
        <div className="item_insert">
          <input
            className="inputTodoText"
            type="text"
            ref={this.newTodoItem}
            placeholder="Add some new todo here..."
            required
          />
          {this.state.showButton ? (
            <button
              style={
                this.state.showButton
                  ? this.saveStyle.show
                  : this.saveStyle.hide
              }
              className="button saveEditedText"
              onClick={() => {
                this.saveEditedText(this.state.currentItemId);
                this.toggleButton();
              }}
            >
              <i className="far fa-save"> Save</i>
            </button>
          ) : (
            <button
              className="button add-button"
              style={
                this.showButton && this.state.currentItemId === this.item.id
                  ? this.saveStyle.hide
                  : this.saveStyle.show
              }
              type="button"
              onClick={this.addTodo}
            >
              ADD
            </button>
          )}
        </div>
        <br />
        <div className="todo-items">{todoItems}</div>
        <Pagination countTodos={this.countTodos()} />
      </div>
    );
  }
}

export default Practice;
