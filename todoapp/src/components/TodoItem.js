import React from "react";
import moment from "moment";

const TodoItem = (props) => {
  const { todo, onDeleteTodo } = props;
  const { title, id, isCompleted, deadline } = todo;
  const todoItemClassName = isCompleted
    ? {
        textDecoration: "line-through",
      }
    : {};

  const deadlineFormatted = moment(deadline).format("MMM Do YY");

  return (
    <div className="todo-item">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input className="checkbox-todo" type="checkbox" />
        <p style={todoItemClassName}>
          {title} - <span>{deadlineFormatted}</span>
        </p>
      </div>
      <div className="todo-delete" onClick={() => onDeleteTodo(id)}>
        <span>X</span>
      </div>
    </div>
  );
};

export default TodoItem;
