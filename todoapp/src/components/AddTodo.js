import React, { useState } from "react";

// Controlled form
const AddTodo = (props) => {
  const [todoValue, setTodoValue] = useState("");

  const onChangeHandler = (event) => {
    setTodoValue(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(todoValue);

    //Clear input value after submiting
    setTodoValue("");
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <input
          id="todoValue"
          name="todoValue"
          value={todoValue}
          onChange={onChangeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;

// Lifting state up
