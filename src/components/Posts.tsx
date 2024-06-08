import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { Posts as IPosts } from "../reducers/posts";
import "./Posts.css";
import { fetchPosts } from "../actions/posts";

const Posts: React.FC = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return <div>{posts?.map((post) => <Item key={post.id} {...post} />)}</div>;
};

export default Posts;

const Item: React.FC<IPosts> = ({ id, userId, title, body }) => {
  return (
    <div className="post">
      <p>id: {id}</p>
      <p>Author: {userId}</p>
      <p>Title: {title}</p>
    </div>
  );
};
