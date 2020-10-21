import React from "react";

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      color: "green",
      fontStyle: "italic",
      textDecoration: "line-through",
    };
    const buttonStyle = {
      hide: { display: "none" },
      show: { display: "block" },
    };

    return (
      <div className="todo-item">
        <input
          id="inp"
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />

        <p
          className="todoText"
          style={this.props.item.completed ? completedStyle : null}
        >
          {this.props.item.text}
        </p>

        <button
          style={
            this.props.showButton &&
            this.props.currentItemId === this.props.item.id
              ? buttonStyle.show
              : buttonStyle.hide
          }
          className="saveEditedText"
          onClick={() => this.props.saveEditedText(this.props.item.id)}
        >
          <i className="far fa-save"> Save</i>
        </button>

        <button
          style={
            this.props.showButton &&
            this.props.currentItemId === this.props.item.id
              ? buttonStyle.hide
              : buttonStyle.show
          }
          className="textEdit"
          onClick={() => this.props.textEdit(this.props.item.id)}
        >
          <i className="far fa-edit"> Edit</i>
        </button>

        <button
          className="todoItemDelete"
          onClick={() => this.props.deleteItem(this.props.item.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    );
  }
}

export default TodoItem;
