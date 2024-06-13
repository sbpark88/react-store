import React, { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { newTodo, todoListState } from "../atoms/todoState";

const TodoItemCreator: React.FC = () => {
  const [text, setText] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [],
  );
  const addTodo = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setTodoList((todoList) => [...todoList, newTodo(text)]);
      setText("");
    },
    [setTodoList, text],
  );

  return (
    <div>
      <input value={text} onChange={onInputChange} />
      <button onClick={addTodo}>추가</button>
    </div>
  );
};

export default TodoItemCreator;
