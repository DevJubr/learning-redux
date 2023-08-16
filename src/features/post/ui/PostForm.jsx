import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../PostSlice";

const PostForm = () => {
  const [Info, setInfo] = useState({ title: "", body: "", author: "" });
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const hendelCng = (e) => {
    const { name, value } = e.target;
    console.log(name);
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
      <select name="author" onChange={hendelCng}>
        <option value="">none</option>
        {users?.map((ath) => {
          return (
            <option key={ath.id} value={ath.id}>
              {ath.name}
            </option>
          );
        })}
      </select>
      <button type="submit">post</button>
    </form>
  );
};

export default PostForm;
