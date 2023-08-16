import React from "react";

const PostForm = () => {
  return (
    <form>
      <input type="text" placeholder="title" />
      <textarea type="text" placeholder="body" />
      <button>post</button>
    </form>
  );
};

export default PostForm;
