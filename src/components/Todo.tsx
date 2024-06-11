import React, { useCallback, useState } from "react";
import "./Todo.css";
import { useTodoStore } from "../store";
import { observer } from "mobx-react-lite";
import { TodoItem } from "../store/TodoStore";

const Todo: React.FC = () => {
  const store = useTodoStore();
  const [title, setTitle] = useState("");
  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [],
  );
  const createTodo = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      store.addTodo(title);
      setTitle("");
    },
    [store, title],
  );

  return (
    <section className="todos-container">
      할 일: <input id="todo-text" onChange={onInputChange} value={title} />
      <button onClick={createTodo}>등록</button>
      <div className="todo-list">
        {store.list?.map((todo) => <Item key={todo.id} {...todo} />)}
      </div>
    </section>
  );
};

export default observer(Todo);

const Item: React.FC<TodoItem> = ({ id, title }) => {
  const store = useTodoStore();

  return (
    <div className="todos--item">
      <div className="todos--id">{id}</div>
      <div className="todos--title">{title}</div>
      <button onClick={() => store.deleteTodo({ id, title })}>제거</button>
    </div>
  );
};
