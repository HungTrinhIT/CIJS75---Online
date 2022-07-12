import React, { useState } from "react";

// Controlled form
/*
  {
    id: uuidv4(),
    title: "",
    deadline: new Date()
  }
*/
const initialState = {
  title: "",
  deadline: null,
};

const AddTodo = (props) => {
  const [todoValue, setTodoValue] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodoValue({
      ...todoValue,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onAddTodo(todoValue);
    setTodoValue(initialState);
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <input
          id="title"
          name="title"
          value={todoValue.title}
          onChange={onChangeHandler}
          required
        />
        <input
          id="deadline"
          name="deadline"
          type="date"
          value={todoValue.deadline}
          onChange={onChangeHandler}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;

// Lifting state up
