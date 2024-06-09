interface Action {
  type: string;
}

const counterReducer = (state = 0, action: Action) => {
  switch (action.type) {
    case "counter/increment":
      return state + 1;
    case "counter/decrement":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
