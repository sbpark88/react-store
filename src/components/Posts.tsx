import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../store";
import { Post } from "../reducers/post";
import "./Posts.css";

const Posts: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPosts();
  }, [dispatch]);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    dispatch({ type: "posts/fetch", payload: response.data });
  };

  return <div>{posts?.map((post) => <Item key={post.id} {...post} />)}</div>;
};

export default Posts;

const Item: React.FC<Post> = ({ id, userId, title, body }) => {
  return (
    <div className="post">
      <p>id: {id}</p>
      <p>Author: {userId}</p>
      <p>Title: {title}</p>
    </div>
  );
};
