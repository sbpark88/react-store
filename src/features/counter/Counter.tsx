import React from "react";
import "./Counter.css";
import { useCounterStore } from "./counterStore";

const Counter: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div className="counter-container">
      Clicked: {count} times
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
