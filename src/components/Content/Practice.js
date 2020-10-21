import React from "react";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";

class Practice extends React.Component {
  constructor(props) {
    super();
    this.newTodoItem = React.createRef();
    this.editCheckboxText = React.createRef();
    this.state = {
      showInput: false,
      showButton: false,
      currentItemId: 0,
      addTodos: props.addTodo,
      todos: props.todosData,
    };
  }

  inputStyle = {
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
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
          todo.text = this.editCheckboxText.current.value;
          this.editCheckboxText.current.value = "";
          return todo;
        }
        return true;
      });
      return {
        todos: prevState.todos,
        showButton: false,
        showInput: false,
        currentItemId: id,
      };
    });
  };

  textEdit = (id) => {
    this.setState({
      showButton: true,
      showInput: true,
      currentItemId: id,
    });
    this.state.todos.filter((item) => {
      if (item.id === id) {
        this.editCheckboxText.current.value = item.text;
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

          <button type="button" onClick={this.addTodo}>
            ADD
          </button>
          <input
            style={
              this.state.showInput ? this.inputStyle.show : this.inputStyle.hide
            }
            className="inputEditCheckboxText"
            type="text"
            ref={this.editCheckboxText}
            required
          />
        </div>
        <br />
        <div className="todo-items">{todoItems}</div>
        <Pagination countTodos={this.countTodos()} />
      </div>
    );
  }
}

export default Practice;
