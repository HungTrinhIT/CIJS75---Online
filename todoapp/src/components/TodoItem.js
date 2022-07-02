import React from "react";

const TodoItem = (props) => {
  const { todo, onDeleteTodo } = props;
  const { title, id, isCompleted } = todo;
  return (
    <div className="todo-item">
      <p>{title}</p>
      <div className="todo-delete" onClick={() => onDeleteTodo(id)}>
        <span>X</span>
      </div>
    </div>
  );
};

export default TodoItem;
