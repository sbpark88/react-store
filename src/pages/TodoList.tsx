import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../atoms/todoState";
import TodoItemCreator from "../components/TodoItemCreator";
import "./TodoList.css";
import SelectTodoListFilter from "../components/SelectTodoListFilter";
import TodoItem from "../components/TodoItemView";
import TodoListStats from "../components/TodoListStats";

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <section className="todos-container">
      <TodoListStats />
      <div className="todos--controls">
        <TodoItemCreator />
        <SelectTodoListFilter />
      </div>
      {todoList?.map((item) => <TodoItem key={item.id} {...item} />)}
    </section>
  );
};

export default TodoList;
