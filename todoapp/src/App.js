import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todoValue) => {
    const { title, deadline } = todoValue;
    const newTodo = {
      title,
      isCompleted: false,
      id: uuidv4(),
      deadline,
    };

    const newTodoList = [...todos, newTodo];

    setTodos(newTodoList);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodoList);
  };

  return (
    <div className="todo-wrapper">
      <div className="todo-container">
        <h1>Todo Application</h1>
        {/* <SearchTodo /> */}
        <AddTodo onAddTodo={onAddTodo} />
        <TodoList data={todos} onDeleteTodo={onDeleteTodo} />
      </div>
    </div>
  );
}

export default App;

/*
  ReactJS: is a frontend library, react-router-dom, axios, fetch
  ReactJS: component based
  JSX: Javscript XML  => (HTML + Javascript)
  Event hanlding (onClick, onChange)
  React hooks: 
    + useState => state => manage UI
    + useEffect => sideEffect

  Form manipulation


  CRUD
    Create
    Read 
    Update 
    Delete


    
    Functional Programming
    Object Oriented Programming
*/
