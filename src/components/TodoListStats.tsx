import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../atoms/todoState";

const TodoListStats: React.FC = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentComplete,
    uncompletedList,
  } = useRecoilValue(todoListStatsState);
  return (
    <ul className="todos--stats">
      <li>전체: {totalNum}</li>
      <li>완료: {totalCompletedNum}</li>
      <li>미완료: {totalUncompletedNum}</li>
      <li>완료율: {percentComplete}</li>
      <li>미완료 목록: {uncompletedList}</li>
    </ul>
  );
};

export default TodoListStats;
