import React from "react";
import TodoItemsList from "./TodoItemsList";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import DateSelector from "../DateSelector/DateSelector";
// import Status from "../Status/Status";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/Categories";
export default class Practice extends React.Component {
  constructor({ todosData, Categories }) {
    super();
    this.newTodoItem = React.createRef();
    // this.editTodoItem = React.createRef();
    // this.searchTodoItem = React.createRef();
    // value: "",
    // completed: "",
    // uncompleted: "",

    this.state = {
      text: "",
      search: "",
      status: "all",
      currentItemId: 0,
      currentCategoryId: 0,
      showButton: false,
      showSideBar: false,
      showModal: false,
      showCategorySaveButton: false,
      todos: todosData,
      categories: Categories,
      itemsPerPage: 4,
      currentPage: 1,
      // newCategoryLabel: "",
      currentCategory: "My todos",
      currentDay: new Date(),
      // currentCategory: "",
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
    this.setState(() => ({ currentCategory: newCategory.label }));
  };

  saveEditedCategoryItem = (id, editedText) => {
    this.setState((prevState) => ({
      categories: prevState.categories.map((item) => {
        if (item.id === id) {
          item.label = editedText;
        }
        return item;
      }),
      todos: prevState.todos.map((todo) => {
        if (prevState.currentCategory === todo.category) {
          todo.category = editedText;
        }
        return todo;
      }),
      currentCategoryId: id,
      currentCategory: editedText,
    }));
  };

  editCategoryItem = (id, editedText) => {
    this.setState({ currentCategoryId: id });
    this.state.categories.filter((item) => {
      if (item.id === id) {
        editedText = item.label;
        console.log(editedText, "edited category");
      }
      return item;
    });
  };

  deleteCategoryItem = (id) => {
    this.setState((prevState) => ({
      categories: prevState.categories.filter((item) =>
        item.id !== id ? item : null
      ),
      todos: prevState.todos.filter((todo) =>
        todo.category !== this.state.currentCategory ? todo : null
      ),
    }));
    this.setState((prevState) => ({
      currentCategory:
        prevState.categories[prevState.categories.length - 1].label,
    }));
  };

  addNewTodo = () => {
    const { todos, currentCategory } = this.state;
    let newTodo = {
      id: Date.now(),
      text: this.newTodoItem.current.value,
      completed: false,
      date: new Date(),
      category: currentCategory,
    };
    this.setState({ todos: [...todos, newTodo] });
    this.newTodoItem.current.value = "";
    console.log(todos);
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

  saveEditedText = (id, editedTodoText) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.text = editedTodoText;
          editedTodoText = "";
        }
        return todo;
      }),
      // currentItemId: id,
    }));
  };

  textEdit = (id, editedTodoText) => {
    this.setState({ currentItemId: id });
    this.state.todos.filter((item) =>
      item.id === id ? (editedTodoText = item.text) : null
    );
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

  currentCategoryHandler = (currentCategory) =>
    this.setState({ currentCategory });

  categoriesHandler = (showCategorySaveButton) =>
    this.setState({ showCategorySaveButton });

  currentDayHandler = (currentDay) => this.setState({ currentDay });

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
        <div className="practiceTop">
          {/* <Status statusSwitchHandler={this.statusSwitchHandler} /> */}
          <div className="searchWrapper">
            <Search onSearch={this.handleSearch} />
          </div>
          <DateSelector currentDayHandler={this.currentDayHandler} />
        </div>
        <div className="main_Practice">
          <Categories
            todos={this.state.todos}
            currentCategory={this.state.currentCategory}
            newTodoItem={this.newTodoItem}
            currentCategoryHandler={this.currentCategoryHandler}
            currentCategoryId={this.state.currentCategoryId}
            showCategorySaveButton={this.state.showCategorySaveButton}
            categories={this.state.categories}
            categoriesHandler={this.categoriesHandler}
            addNewCategory={this.addNewCategory}
            editCategoryItem={this.editCategoryItem}
            saveEditedCategoryItem={this.saveEditedCategoryItem}
            deleteCategoryItem={this.deleteCategoryItem}
          />
          <div className="addTodoWrapper">
            <input
              autoFocus={true}
              className="input inputTodoText"
              type="text"
              ref={this.newTodoItem}
              placeholder="Add some new todo here..."
              required
            />

            <button
              className={`${"button"} ${"addButton"} ${
                this.showButton && this.state.currentItemId === this.item.id
                  ? "hideButton"
                  : "showButton"
              }`}
              type="button"
              onClick={this.addTodo}
            >
              <i className="fas fa-plus-square" /> ADD
            </button>
          </div>

          <TodoItemsList
            handleChange={this.handleChange}
            deleteItem={this.deleteItem}
            textEdit={this.textEdit}
            saveEditedText={this.saveEditedText}
            showButton={this.state.showButton}
            currentCategory={this.state.currentCategory}
            currentItemId={this.state.currentItemId}
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
