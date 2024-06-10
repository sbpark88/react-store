import React from "react";
import Counter from "../features/counter/Counter";
import Todo from "../features/todo/Todo";

const Main: React.FC = () => {
  return (
    <>
      <Counter />
      <Todo />
    </>
  );
};

export default Main;
