const PostForm = () => {
  const [init, setinit] = useState({
    title: "",
    dec: "",
  });

  const henddelChenge = (ev) => {
    const { name, value } = ev.target.value;
  };

  return (
    <form>
      <input type="text" placeholder="enter title" name="title" />
      <textarea
        name="dec"
        id=""
        cols="30"
        rows="10"
        placeholder="enter ur des"
      ></textarea>
      <button type="submit">add post</button>
    </form>
  );
};

export default PostForm;
