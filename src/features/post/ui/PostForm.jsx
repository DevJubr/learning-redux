import React, { useState } from "react";

const PostForm = () => {
  const [Info, setInfo] = useState({ title: "", body: "" });

  const hendelCng = (e) => {
    const { name, value } = e.target;
    if (value) {
      setInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  return (
    <form>
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
      <button>post</button>
    </form>
  );
};

export default PostForm;
