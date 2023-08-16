import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../PostSlice";

const PostForm = () => {
  const [Info, setInfo] = useState({ title: "", body: "" });
  const dispatch = useDispatch();
  const hendelCng = (e) => {
    const { name, value } = e.target;
    if (value) {
      setInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const hendelSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ ...Info }));
  };
  return (
    <form onSubmit={hendelSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={hendelCng}
        value={Info.title}
      />
      <textarea
        type="text"
        placeholder="body"
        name="body"
        onChange={hendelCng}
        value={Info.body}
      />
      <button type="submit">post</button>
    </form>
  );
};

export default PostForm;
