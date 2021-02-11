import React from "react";
import TodoItemsList from "./TodoItemsList";
// import Pagination from "../Pagination/Pagination";
// import Status from "../Status/Status";
// import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import DateSelector from "../DateSelector/DateSelector";
import Sidebar from "../Sidebar/Sidebar";
import CategoriesSelector from "../Categories/CategoriesSelector";
export default class Practice extends React.Component {
  constructor({ todosData, Categories, categoryList, month }) {
    super();
    this.newTodoItem = React.createRef();
    this.newTodoItemCategory = React.createRef();

    this.state = {
      // text: "",
      search: "",
      status: "all",
      currentItemId: 0,
      currentCategoryId: 0,
      showButton: false,
      showSideBar: false,
      showModal: false,
      displayModal: false,
      todos: todosData,
      categories: Categories,
      currentCategory: "",
      // filteredCategory: [],
      currentDateRange: "",
      today: new Date(),
      month,
      itemsPerPage: 4,
      currentPage: 1,
      newTodoCategory: "",
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

  addNewTodo = () => {
    const { todos, newTodoCategory } = this.state;
    let newTodo = {
      id: Date.now(),
      text: this.newTodoItem.current.value,
      completed: false,
      date: new Date(),
      category: newTodoCategory,
    };
    this.setState({ todos: [...todos, newTodo] });
    this.newTodoItem.current.value = "";
    this.setState({ currentPage: 1 });
  };

  addTodo = () => {
    let success = true;
    let messageErrors = "";
    if (this.newTodoItem.current.value.length === 0) {
      success = false;
      messageErrors = "Please enter your todo";
    }
    this.state.todos.map((item) => {
      if (!this.state.newTodoCategory) {
        success = false;
        messageErrors = "Please choose your category";
      }
      if (
        item.text === this.newTodoItem.current.value &&
        this.state.newTodoCategory === item.category
      ) {
        success = false;
        messageErrors = "This element already exists";
      }
      return true;
    });

    if (success) {
      this.addNewTodo();
      this.newTodoCategoryHandlerClear();
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

  handleSearch = (search) => this.setState({ search, currentPage: 1 });

  currentPageHandler = (currentPage) => this.setState({ currentPage });

  newTodoCategoryHandler = (e) => {
    this.setState({ newTodoCategory: e.target.value });
  };
  newTodoCategoryHandlerClear = () => this.setState({ newTodoCategory: "" });

  categorySwitchHandler = (currentCategory) => {
    this.setState({ currentCategory });
  };

  currentDateRangeHandler = (currentDateRange) =>
    this.setState({ currentDateRange });

  componentDidMount() {}

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
          <div className="searchWrapper">
            <Search onSearch={this.handleSearch} />
          </div>
          <DateSelector
            currentDateRangeHandler={this.currentDateRangeHandler}
            todos={this.state.todos}
            currentDateRange={this.state.currentDateRange}
          />
          <CategoriesSelector
            categories={this.state.categories}
            currentCategory={this.state.currentCategory}
            categorySwitchHandler={this.categorySwitchHandler}
          />
        </div>
        <div className="main_Practice">
          <div className="addTodoWrapper">
            <form className="addTodoWrapperForm">
              <input
                autoFocus={true}
                className="input inputTodoText"
                type="text"
                ref={this.newTodoItem}
                placeholder="Add some new todo here..."
                required
              />
              <select
                value={this.state.newTodoCategory}
                className="addTodoSelect"
                onChange={this.newTodoCategoryHandler}
              >
                <option>Choose category</option>
                {this.state.categories.map((item) => (
                  <option value={item.label} key={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
              <button
                className={`${"button"} ${"addButton"} ${
                  this.showButton && this.state.currentItemId === this.item.id
                    ? "hideButton"
                    : "showButton"
                }`}
                type="button"
                onClick={this.addTodo}
              >
                <i className="fas fa-plus-square" />
              </button>
            </form>
          </div>

          <TodoItemsList
            todos={this.state.todos}
            category={this.state.categories}
            handleChange={this.handleChange}
            deleteItem={this.deleteItem}
            textEdit={this.textEdit}
            saveEditedText={this.saveEditedText}
            showButton={this.state.showButton}
            currentCategory={this.state.currentCategory}
            currentItemId={this.state.currentItemId}
            toggleButton={this.toggleButton}
            filteredCategory={this.state.filteredCategory}
            search={this.state.search}
            status={this.state.status}
            currentDateRange={this.state.currentDateRange}
            today={this.state.today}
            month={this.state.month}
            currentPage={this.state.currentPage}
            itemsPerPage={this.state.itemsPerPage}
            currentPageHandler={this.currentPageHandler}
          />
        </div>
      </div>
    );
  }
}
