import React from "react";

const TodoItem = (props) => {
  const { todo, onDeleteTodo } = props;
  const { title, id, isCompleted } = todo;
  const todoItemClassName = isCompleted
    ? {
        textDecoration: "line-through",
      }
    : {};
  return (
    <div className="todo-item">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input className="checkbox-todo" type="checkbox" />
        <p style={todoItemClassName}>{title}</p>
      </div>
      <div className="todo-delete" onClick={() => onDeleteTodo(id)}>
        <span>X</span>
      </div>
    </div>
  );
};

export default TodoItem;
