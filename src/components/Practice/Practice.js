import React from "react";
import TodoItemsList from "./TodoItemsList";
import { Search } from "../Search/Search";
import DateSelector from "../DateSelector/DateSelector";
import Sidebar from "../Sidebar/Sidebar";
import CategoriesSelector from "../Categories/CategoriesSelector";
import { AddForm } from "../AddForm/AddForm";
import { ViewChangeButton } from "../ViewButton/ViewChangeButton.jsx";
export default class Practice extends React.Component {
  constructor({ todosData, Categories, month }) {
    super();
    this.newTodoItemCategory = React.createRef();
    this.state = {
      search: "",
      status: "all",
      currentItemId: 0,
      showButton: false,
      showSideBar: false,
      showModal: false,
      view: false,
      todos: todosData,
      categories: Categories,
      currentCategory: "",
      currentDateRange: "",
      newTodoCategory: "",
      today: new Date(),
      month,
      itemsPerPage: 4,
      currentPage: 1,
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

  addNewTodo = (text) => {
    const { todos, newTodoCategory } = this.state;
    let newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date(),
      category: newTodoCategory,
    };
    this.setState({ todos: [...todos, newTodo] });
    this.setState({ currentPage: 1 });
  };

  addTodo = (text) => {
    let success = true;
    let messageErrors = "";
    if (text.length === 0) {
      success = false;
      messageErrors = "Please enter your todo";
    }
    this.state.todos.map((item) => {
      if (!this.state.newTodoCategory) {
        success = false;
        messageErrors = "Please choose your category";
      }
      if (item.text === text && this.state.newTodoCategory === item.category) {
        success = false;
        messageErrors = "This element already exists";
      }
      return true;
    });

    if (success) {
      this.addNewTodo(text);
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

  newTodoCategoryHandler = (e) => {
    this.setState({ newTodoCategory: e.target.value });
  };
  newTodoCategoryHandlerClear = () => this.setState({ newTodoCategory: "" });

  categorySwitchHandler = (currentCategory) => {
    this.setState({ currentCategory });
  };

  currentDateRangeHandler = (currentDateRange) =>
    this.setState({ currentDateRange });

  itemsPerPageHandler = (itemsPerPage) => this.setState({ itemsPerPage });

  viewToggle = () => {
    this.setState((prevState) => ({ view: !prevState.view }));
  };

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
          <ViewChangeButton
            view={this.state.view}
            viewToggle={this.viewToggle}
          />

          <Search onSearch={this.handleSearch} />

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
          <AddForm
            categories={this.state.categories}
            newTodoCategory={this.state.newTodoCategory}
            addTodo={this.addTodo}
            newTodoCategoryHandler={this.newTodoCategoryHandler}
          />
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
            search={this.state.search}
            view={this.state.view}
            status={this.state.status}
            currentDateRange={this.state.currentDateRange}
            today={this.state.today}
            month={this.state.month}
            currentPage={this.state.currentPage}
            itemsPerPage={this.state.itemsPerPage}
            itemsPerPageHandler={this.itemsPerPageHandler}
            currentPageHandler={this.currentPageHandler}
          />
        </div>
      </div>
    );
  }
}
