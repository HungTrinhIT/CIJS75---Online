import TodoItem from "./TodoItem";

const TodoList = (props) => {
  // Object desctructering
  const { data, onDeleteTodo } = props;

  return (
    <div className="todo-list">
      {data.map((todo) => {
        return (
          <TodoItem todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
        );
      })}
    </div>
  );
};

export default TodoList;
