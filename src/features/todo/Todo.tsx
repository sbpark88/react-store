import React, { useCallback, useState } from "react";
import "./Todo.css";
import { TodoItem, useTodoStore } from "./todoStore";

const Todo: React.FC = () => {
  const [title, setTitle] = useState("");
  const { list, addTodo } = useTodoStore();
  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [],
  );
  const createTodo = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      addTodo(title);
      setTitle("");
    },
    [addTodo, title],
  );

  return (
    <section className="todos-container">
      할 일: <input id="todo-text" onChange={onInputChange} value={title} />
      <button onClick={createTodo}>등록</button>
      <div className="todo-list">
        {list?.map((todo) => <Item key={todo.id} {...todo} />)}
      </div>
    </section>
  );
};

export default Todo;

const Item: React.FC<TodoItem> = ({ id, title }) => {
  const { deleteTodo } = useTodoStore();
  return (
    <div className="todos--item">
      <div className="todos--id">{id}</div>
      <div className="todos--title">{title}</div>
      <button onClick={() => deleteTodo({ id, title })}>제거</button>
    </div>
  );
};
