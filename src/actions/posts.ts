import { Dispatch } from "react";
import { RootState } from "../store";
import axios from "axios";

export const fetchPosts =
  (): any => async (dispatch: Dispatch<unknown>, getState: RootState) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    dispatch({ type: "posts/fetch", payload: response.data });
  };
