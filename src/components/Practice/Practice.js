import React from "react";
import TodoItemsList from "./TodoItemsList";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import DateSelector from "../DateSelector/DateSelector";
// import Status from "../Status/Status";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/Categories";
import CategoriesSelector from "../Categories/CategoriesSelector";
export default class Practice extends React.Component {
  constructor({ todosData, Categories, categoryList, month }) {
    super();
    this.newTodoItem = React.createRef();
    this.newTodoItemCategory = React.createRef();

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
      currentCategory: "",
      filteredCategory: [],
      currentDateRange: "",
      today: new Date(),
      month,
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
  // addNewCategory = (categories, labelText) => {
  //   let newCategory = {
  //     id: Date.now(),
  //     label: labelText,
  //   };
  //   this.setState(() => ({ categories: [...categories, newCategory] }));
  //   this.setState(() => ({ currentCategory: newCategory.label }));
  //   this.setState({ currentPage: 1 });
  //   if (this.state.categories.length >= 1) {
  //     this.setState(() => ({
  //       filteredTodos: [],
  //     }));
  //   }
  // };

  // addCategory = (categories, labelText) => {
  //   if (this.state.currentCategory === "My todos") {
  //     this.setState({ filteredTodos: this.state.todos.filter(item => item.category === "My todos") })
  //   }
  //   else if (this.state.currentCategory === "Hobby") {
  //     this.setState({ filteredTodos: this.state.todos.filter(item => item.category === "Hobby") })
  //   }
  //   if (this.state.currentCategory === "Other") {
  //     this.setState({ filteredTodos: this.state.todos.filter(item => item.category === "Other") })
  //   }
  // };

  // saveEditedCategoryItem = (id, editedText) => {
  //   this.setState((prevState) => ({
  //     categories: prevState.categories.map((item) => {
  //       if (item.id === id) {
  //         item.label = editedText;
  //       }
  //       return item;
  //     }),
  //     todos: prevState.todos.map((todo) => {
  //       if (prevState.currentCategory === todo.category) {
  //         todo.category = editedText;
  //       }
  //       return todo;
  //     }),
  //     currentCategoryId: id,
  //     currentCategory: editedText,
  //   }));
  // };

  // editCategoryItem = (id, editedText) => {
  //   this.setState({ currentCategoryId: id });
  //   this.state.categories.filter((item) => {
  //     if (item.id === id) {
  //       editedText = item.label;
  //     }
  //     return item;
  //   });
  // };

  // deleteCategoryItem = (id) => {
  //   this.setState((prevState) => ({
  //     categories: prevState.categories.filter((item) =>
  //       item.id !== id ? item : null
  //     ),
  //     todos: prevState.todos.filter((todo) =>
  //       todo.category !== this.state.currentCategory ? todo : null
  //     ),
  //   }));
  //   this.setState((prevState) => ({
  //     currentCategory:
  //       prevState.categories[prevState.categories.length - 1].label,
  //   }));
  // };

  // deleteCategory = (id) => {
  //   if (this.state.categories.length - 1 === 0) {
  //     this.setState(() => ({ categories: [], currentCategory: "" }));
  //     this.setState(() => ({ currentCategory: "" }));
  //   } else {
  //     this.deleteCategoryItem(id);
  //   }
  // };

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
        this.state.currentCategory === item.category
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
    let numberItems = this.state.todos.length - 1;
    let activePage = Math.ceil(numberItems / this.state.itemsPerPage);
    // if (this.state.currentCategory) {
    //   this.setState({ currentPage: activePage <= 1 ? 1 : activePage });
    // }
  };

  toggleButton = (showButton) => this.setState({ showButton });

  statusSwitchHandler = (status) => this.setState({ status });

  handleSearch = (search) => this.setState({ search, currentPage: 1 });

  currentPageHandler = (currentPage) => this.setState({ currentPage });

  // currentCategoryHandler = (currentCategory) => { this.setState({ currentCategory }) }
  newTodoCategoryHandler = (e) => {
    this.setState({ newTodoCategory: e.target.value });
  };
  newTodoCategoryHandlerClear = (e) => this.setState({ newTodoCategory: "" });

  categorySwitchHandler = (currentCategory) => {
    this.setState({ currentCategory, currentPage: 1 });
  };

  categoriesHandler = (showCategorySaveButton) =>
    this.setState({ showCategorySaveButton });

  currentDateRangeHandler = (currentDateRange) =>
    this.setState({ currentDateRange });

  // filteredTodosHandler = () => {
  //   if (this.state.currentCategory === "Select category") {
  //     this.setState({ filteredTodos: [...this.state.todos] });
  //   }
  //   if (this.state.currentCategory === "My todos") {
  //     this.setState((prevState) => ({
  //       filteredTodos: prevState.todos.filter(
  //         (item) => item.category === "My todos"
  //       ),
  //     }));
  //   } else if (this.state.currentCategory === "Hobby") {
  //     this.setState((prevState) => ({
  //       filteredTodos: prevState.todos.filter(
  //         (item) => item.category === "Hobby"
  //       ),
  //     }));
  //   } else if (this.state.currentCategory === "Other") {
  //     this.setState((prevState) => ({
  //       filteredTodos: [
  //         prevState.todos.filter((item) => item.category === "Other"),
  //       ],
  //     }));
  //   }
  // };
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
          {/* <Status statusSwitchHandler={this.statusSwitchHandler} /> */}
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
          {/* <Categories
            todos={this.state.todos}
            // todos={this.state.filteredTodos}
            currentCategory={this.state.currentCategory}
            newTodoItem={this.newTodoItem}
            currentCategoryHandler={this.currentCategoryHandler}
            currentCategoryId={this.state.currentCategoryId}
            showCategorySaveButton={this.state.showCategorySaveButton}
            categories={this.state.categories}
            categoriesHandler={this.categoriesHandler}
            addCategory={this.addCategory}
            addNewCategory={this.addNewCategory}
            editCategoryItem={this.editCategoryItem}
            saveEditedCategoryItem={this.saveEditedCategoryItem}
            deleteCategoryItem={this.deleteCategoryItem}
            deleteCategory={this.deleteCategory}
          /> */}
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
            // todos={sameCategoryList}
            category={this.state.categories}
            handleChange={this.handleChange}
            deleteItem={this.deleteItem}
            textEdit={this.textEdit}
            saveEditedText={this.saveEditedText}
            showButton={this.state.showButton}
            currentCategory={this.state.currentCategory}
            currentItemId={this.state.currentItemId}
            toggleButton={this.toggleButton}
            // filteredTodos={this.state.filteredTodos}
            filteredCategory={this.state.filteredCategory}
            search={this.state.search}
            status={this.state.status}
            currentPage={this.state.currentPage}
            itemsPerPage={this.state.itemsPerPage}
            currentDateRange={this.state.currentDateRange}
            today={this.state.today}
            month={this.state.month}
            getDaysArray={this.state.getDaysArray}
            dayAdd={this.state.dayAdd}
            daySubst={this.state.daySubst}
            currentPageHandler={this.currentPageHandler}
          />
        </div>
        {/* <Pagination
          todos={this.state.todos}
          sameCategoryList={sameCategoryList}
          itemsPerPage={this.state.itemsPerPage}
          currentPage={this.state.currentPage}
          currentCategory={this.state.currentCategory}
          currentPageHandler={this.currentPageHandler}
        /> */}
      </div>
    );
  }
}
