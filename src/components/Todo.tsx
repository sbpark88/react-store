import React, { useCallback, useState } from "react";
import "./Todo.css";
import store from "../store";

const Todo: React.FC = () => {
  const { todos } = store.getState();
  const [text, setText] = useState<string>("");
  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [],
  );

  const todoAdd = () => {
    if (text?.trim() === "") return;
    store.dispatch({ type: "todos/todoAdded", text });
    setText("");
  };

  return (
    <section className="todos-container">
      할 일:{" "}
      <input type="text" id="todo-text" onChange={onInputChange} value={text} />
      <button onClick={todoAdd}>등록</button>
      <div className="todo-list">
        {todos?.map((todo) => <Item key={todo} text={todo} />)}
      </div>
    </section>
  );
};

export default Todo;

interface ItemProps {
  text: string;
}

const Item: React.FC<ItemProps> = ({ text }) => {
  const deleteTodo = () => {
    store.dispatch({ type: "todos/todoDeleted", text });
  };

  return (
    <div
      className="todos--item"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div>{text}</div>
      <button onClick={deleteTodo}>제거</button>
    </div>
  );
};
