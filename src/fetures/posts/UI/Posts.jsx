import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../postSlice";

const Posts = () => {
  const posts = useSelector(getAllPosts);

  const RenderPost = () => {
    return (
      <>
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.dec}</p>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <RenderPost />
    </div>
  );
};

export default Posts;
