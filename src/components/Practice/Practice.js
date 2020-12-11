import React from "react";
import TodoItemsList from "./TodoItemsList";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
// import Status from "../Status/Status";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/Categories";
export default class Practice extends React.Component {
  constructor({ todosData, Categories }) {
    super();
    this.newTodoItem = React.createRef();
    // this.editTodoItem = React.createRef();
    // this.searchTodoItem = React.createRef();

    this.state = {
      text: "",
      search: "",
      // value: "",
      status: "all",
      showButton: false,
      currentItemId: 0,
      currentCategoryId: 0,
      showSideBar: false,
      showModal: false,
      showCategorySaveButton: false,
      todos: todosData,
      // completed: "",
      // uncompleted: "",
      itemsPerPage: 4,
      // newCategory: "",
      currentPage: 1,
      categories: Categories,
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

  dateCreate = () => {};

  addNewCategory = (categories, labelText) => {
    let newCategory = {
      id: Date.now(),
      label: labelText,
    };
    this.setState({ categories: [...categories, newCategory] });
  };

  saveEditedCategoryItem = (id, editedText) => {
    this.setState((prevState) => ({
      categories: prevState.categories.map((item) => {
        if (item.id === id) {
          item.label = editedText;
        }
        return item;
      }),
      currentCategoryId: id,
    }));
  };

  editCategoryItem = (id, editedText) => {
    this.setState({ currentCategoryId: id });
    this.state.categories.filter((item) =>
      item.id === id ? (editedText = item.label) : null
    );
  };

  deleteCategoryItem = (id) => {
    this.setState((prevState) => ({
      categories: prevState.categories.filter((item) =>
        item.id !== id ? item : null
      ),
    }));
  };

  addNewTodo = () => {
    const { todos } = this.state;
    let newTodo = {
      id: Date.now(),
      text: this.newTodoItem.current.value,
      completed: false,
      // date: new Date(),
    };
    this.setState({ todos: [...todos, newTodo] });
    this.newTodoItem.current.value = "";
  };

  addTodo = () => {
    let success = true;
    let messageErrors = "";
    if (this.newTodoItem.current.value.length === 0) {
      success = false;
      messageErrors = "Please enter your todo";
    }
    this.state.todos.map((item) => {
      if (item.text === this.newTodoItem.current.value) {
        success = false;
        messageErrors = "This element already exists";
      }
      return true;
    });
    if (success) {
      return this.addNewTodo();
    } else {
      alert(messageErrors);
    }
    return true;
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
    this.newTodoItem.current.focus();
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => (todo.id !== id ? todo : null)),
    }));
  };

  toggleButton = (showButton) => this.setState({ showButton });

  statusSwitchHandler = (status) => this.setState({ status });

  handleSearch = (search) => this.setState({ search });

  currentPageHandler = (currentPage) => this.setState({ currentPage });

  categoriesHandler = (showCategorySaveButton) =>
    this.setState({ showCategorySaveButton });

  componentDidUpdate() {}

  render() {
    return (
      <div className="practice">
        <Sidebar
          status={this.state.status}
          statusSwitchHandler={this.statusSwitchHandler}
          showSideBar={this.state.showSideBar}
          showModal={this.state.showModal}
        />
        <div className="practice_Top">
          <>
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
          </>
          <>
            {/* <Status statusSwitchHandler={this.statusSwitchHandler} /> */}
            <Search onSearch={this.handleSearch} />
          </>
        </div>
        <Categories
          currentCategoryId={this.state.currentCategoryId}
          showCategorySaveButton={this.state.showCategorySaveButton}
          categories={this.state.categories}
          categoriesHandler={this.categoriesHandler}
          addNewCategory={this.addNewCategory}
          editCategoryItem={this.editCategoryItem}
          saveEditedCategoryItem={this.saveEditedCategoryItem}
          deleteCategoryItem={this.deleteCategoryItem}
        />
        <div className="main_Practice">
          <TodoItemsList
            handleChange={this.handleChange}
            deleteItem={this.deleteItem}
            textEdit={this.textEdit}
            showButton={this.state.showButton}
            // currentItemId={this.state.currentItemId}
            toggleButton={this.toggleButton}
            todos={this.state.todos}
            search={this.state.search}
            status={this.state.status}
            currentPage={this.state.currentPage}
            itemsPerPage={this.state.itemsPerPage}
          />
        </div>
        <Pagination
          todos={this.state.todos}
          itemsPerPage={this.state.itemsPerPage}
          currentPage={this.state.currentPage}
          currentPageHandler={this.currentPageHandler}
        />
      </div>
    );
  }
}
