import { useDispatch } from "react-redux";
import { addReactions } from "../postSlice";

const ReacttionsUi = ({ post }) => {
  const dispatch = useDispatch();
  const imogi = {
    like: "👍",
    love: "❤️",
    wow: "😯",
  };

  const forRender = Object.entries(imogi);

  return (
    <div className="btnsR">
      {forRender.map(([name, value]) => {
        return (
          <button
            key={post.keyy}
            name={name}
            onClick={() => {
              dispatch(addReactions({ postId: post.id, react: name }));
            }}
          >
            {value} - {post.reacts[name]}
          </button>
        );
      })}
    </div>
  );
};

export default ReacttionsUi;
