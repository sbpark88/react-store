import React from "react";
import "./Counter.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div className="counter-container">
      Clicked: {count} times
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
