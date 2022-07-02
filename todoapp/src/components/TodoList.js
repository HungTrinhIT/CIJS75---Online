import TodoItem from "./TodoItem";

const TodoList = (props) => {
  // Object desctructering
  const { data, onDeleteTodo } = props;

  return (
    <div className="todo-list">
      {data.map((todo, index) => {
        return <TodoItem todo={todo} key={index} onDeleteTodo={onDeleteTodo} />;
      })}
    </div>
  );
};

export default TodoList;
