import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../postSlice";
const init = {
  title: "",
  dec: "",
};
const PostForm = () => {
  const dispatch = useDispatch();
  const [State, setState] = useState({
    ...init,
  });

  const henddelChenge = (ev) => {
    const { name, value } = ev.target;
    setState((preve) => ({
      ...preve,
      [name]: value,
    }));
  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(State));
    setState(init);
  };

  return (
    <form>
      <input
        value={State.title}
        type="text"
        placeholder="enter title"
        name="title"
        onChange={(e) => henddelChenge(e)}
      />
      <textarea
        name="dec"
        cols="30"
        rows="10"
        value={State.dec}
        placeholder="enter ur des"
        onChange={(e) => henddelChenge(e)}
      ></textarea>
      <button onClick={hendelSubmit} type="submit">
        add post
      </button>
    </form>
  );
};

export default PostForm;
