import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="row" role="alert" style={this.getStyle()}>
        <div className="col-md-auto">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
        </div>
        <div className="col-md">{title}</div>
        <div className="col-md">
          <button
            onClick={this.props.delTodo.bind(this, id)}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
