enum ActionType {
  FETCH = "posts/fetch",
  DELETE = "posts/delete",
}

export interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface Action {
  type: ActionType;
  payload: Posts[];
}

const initialState: Posts[] = [];

const postsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH:
      return action.payload;
    case ActionType.DELETE:
      return state.filter(
        (post) => !action.payload.find((value) => value.id === post.id),
      );
    default:
      return state;
  }
};

export default postsReducer;
