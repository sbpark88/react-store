enum ActionType {
  ADD = "todos/todoAdded",
  DELETE = "todos/todoDeleted",
}

interface Action {
  type: ActionType;
  payload: { text: string };
}

const initialSate: string[] = [];

const todosReducer = (state = initialSate, action: Action) => {
  switch (action.type) {
    case ActionType.ADD:
      return [...state, action.payload.text];
    case ActionType.DELETE:
      return state.filter((todo) => todo !== action.payload.text);
    default:
      return state;
  }
};

export default todosReducer;
