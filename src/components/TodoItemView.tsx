import React from "react";
import {
  deleteTodoItem,
  editTodoItem,
  TodoItem,
  todoListState,
} from "../atoms/todoState";
import { useRecoilState } from "recoil";

const TodoItemView: React.FC<TodoItem> = ({ id, text, isComplete }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleTodoCompletion = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.checked);
    const newList = editTodoItem(todoList, {
      id,
      text,
      isComplete: event.target.checked,
    });
    setTodoList(newList);
  };

  const deleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newList = deleteTodoItem(todoList, id);
    setTodoList(newList);
  };

  return (
    <div className="todos--item">
      <div className="todos--id">{id}</div>
      <div className={`todos--title ${isComplete ? "done" : ""}`}>{text}</div>
      <label>
        Done:
        <input
          type="checkbox"
          checked={isComplete}
          onChange={toggleTodoCompletion}
        />
      </label>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
};

export default TodoItemView;
