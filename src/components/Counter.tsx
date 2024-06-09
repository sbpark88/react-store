import React from "react";
import { RootState } from "../store";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onIncrement = () => dispatch({ type: "counter/increment" });
  const onDecrement = () => dispatch({ type: "counter/decrement" });

  return (
    <div className="counter-container">
      Clicked: {counter} times <button onClick={onIncrement}>+</button>{" "}
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;
