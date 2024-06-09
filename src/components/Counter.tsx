import React from "react";
import store from "../store";
import "./Counter.css";

const Counter: React.FC = () => {
  const { counter } = store.getState();

  const onIncrement = () => store.dispatch({ type: "counter/increment" });
  const onDecrement = () => store.dispatch({ type: "counter/decrement" });

  return (
    <div className="counter-container">
      Clicked: {counter} times <button onClick={onIncrement}>+</button>{" "}
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
