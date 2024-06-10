import React, { useCallback, useState } from "react";
import "./Todo.css";
import { addTodo, deleteTodo, selectTodo, TodoItem } from "./todoSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Todo: React.FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectTodo);
  const [title, setTitle] = useState("");
  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    [],
  );
  const createTodo = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      dispatch(addTodo(title));
      setTitle("");
    },
    [dispatch, title],
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
  const dispatch = useAppDispatch();

  return (
    <div className="todos--item">
      <div className="todos--id">{id}</div>
      <div className="todos--title">{title}</div>
      <button onClick={() => dispatch(deleteTodo({ id, title }))}>제거</button>
    </div>
  );
};
