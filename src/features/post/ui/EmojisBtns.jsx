import React from "react";
import { addReact } from "../PostSlice";
import { useDispatch } from "react-redux";

const EmojisBtns = ({ post }) => {
  const dispatch = useDispatch();
  const reacts = {
    like: "👍🏿",
    love: "🧡",
    wow: "😲",
  };
  const reatcB = Object.entries(reacts);
  const increaseLike = () => {};
  return (
    <div>
      {reatcB.map(([key, value]) => (
        <button
          onClick={() => {
            dispatch(addReact({ key, postId: post.id }));
          }}
        >
          {value}: {post.reacts[key]}
        </button>
      ))}
    </div>
  );
};

export default EmojisBtns;
