import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const initialState = [
  {
    id: 1,
    title: "CIJS 75",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Di choi voi Gau",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Di ve nha",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Di ngu",
    isCompleted: false,
  },
];
function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todoValue) => {
    const newTodo = {
      title: todoValue,
      isCompleted: false,
      id: todos.length + 1,
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
