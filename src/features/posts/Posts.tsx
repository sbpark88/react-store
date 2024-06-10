import React from "react";
import "./Posts.css";
import { PostItem, useGetPostsQuery } from "./postsSlice";

const Posts: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useGetPostsQuery({
    limit: 100,
  });

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return <div>{data?.map((post) => <Item key={post.id} {...post} />)}</div>;
  }

  return null;
};

export default Posts;

const Item: React.FC<PostItem> = ({ id, userId, title, body }) => {
  return (
    <div className="post">
      <p>id: {id}</p>
      <p>Author: {userId}</p>
      <p>Title: {title}</p>
    </div>
  );
};
