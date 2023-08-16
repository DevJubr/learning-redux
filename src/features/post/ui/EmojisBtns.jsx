import React from "react";

const EmojisBtns = ({}) => {
  const reacts = {
    like: "👍🏿",
    love: "🧡",
    wow: "😲",
  };
  const reatcB = Object.entries(reacts);

  return (
    <div>
      {reatcB.map(([key, value]) => (
        <button>
          {key}: {value}
        </button>
      ))}
    </div>
  );
};

export default EmojisBtns;
