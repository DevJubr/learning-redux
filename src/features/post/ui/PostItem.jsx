import React from "react";
import { useSelector } from "react-redux";

const PostItem = ({ item }) => {
  const users = useSelector((state) => state.users);
  const user = users?.find((user) => user.id === item.userId);
  console.log(user);
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <span> {item.date} time age</span>
      <p>author: {user.name}</p>
    </div>
  );
};

export default PostItem;
