import React from "react";

const PostItem = ({ item }) => {
  return (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <span> {item.date} time age</span>
    </div>
  );
};

export default PostItem;
