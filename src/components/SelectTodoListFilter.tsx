import React, { useCallback } from "react";
import {
  TodoListFilter,
  todoListFilters,
  todoListFilterState,
} from "../atoms/todoState";
import { useRecoilState } from "recoil";

const SelectTodoListFilter: React.FC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter(event.target.value as TodoListFilter);
    },
    [setFilter],
  );

  return (
    <>
      Filter:{" "}
      <select value={filter} onChange={updateFilter}>
        {todoListFilters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectTodoListFilter;
