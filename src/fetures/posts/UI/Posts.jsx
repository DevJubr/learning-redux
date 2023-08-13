import PostForm from "./PostForm";
import { useDispatch, useSelector } from "react-redux";
import { fatechPost, getAllPosts, getstatus } from "../postSlice";
import { formatDistanceToNow, parseISO } from "date-fns";
import ReacttionsUi from "./ReacttionsUi";
import { useEffect } from "react";

const Posts = () => {
  const posts = useSelector(getAllPosts);
  const ststus = useSelector(getstatus);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (ststus === "idle") {
      dispatch(fatechPost());
    }
  }, []);
  if (ststus === "success") {
    const RenderPost = () => {
      const renderForPost = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

      return (
        <>
          {renderForPost.map((post) => {
            const author = users.find((elm) => elm.id == post.id);
            let daaata = "";
            if (post.date) {
              const ioD = parseISO(post.date);
              const tmpd = formatDistanceToNow(ioD);
              daaata = tmpd;
            }
            return (
              <div className="post" key={post.keyy}>
                <button>
                  <h2>id: {post.id}</h2>
                </button>
                <button>
                  <h2>Userid: {post.userId}</h2>
                </button>
                <br />
                <br />
                <h4>{post.title}</h4>
                <span>{author ? author.name : "anonimas"}</span>
                <span>{daaata}</span>
                <p>{post.body}</p>

                <ReacttionsUi post={post} />
              </div>
            );
          })}
        </>
      );
    };

    return (
      <div className="postC">
        <PostForm />
        <RenderPost />
      </div>
    );
  } else {
    return (
      <>
        <h1>loading.............</h1>
      </>
    );
  }
};

export default Posts;
