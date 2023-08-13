import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../postSlice";
const init = {
  title: "",
  dec: "",
};
const PostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [State, setState] = useState({
    ...init,
  });
  const [userId, setuserId] = useState("");

  const henddelChenge = (ev) => {
    const { name, value } = ev.target;
    setState((preve) => ({
      ...preve,
      [name]: value,
    }));
  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(State, userId));
    setState(init);
    setuserId("");
  };
  const hendelAoutherCngd = (e) => {
    setuserId(e.target.value);
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

      <select name="user" value={userId} onChange={hendelAoutherCngd}>
        <option value="">select aouther</option>
        {users.map((aut, ind) => (
          <option>{aut.name}</option>
        ))}
      </select>

      <button onClick={hendelSubmit} type="submit" disabled={!+userId}>
        add post
      </button>
    </form>
  );
};

export default PostForm;
