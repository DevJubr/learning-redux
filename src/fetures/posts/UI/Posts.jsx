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

  const RenderPost = () => {
    const renderForPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    return (
      <>
        {renderForPost.map((post) => {
          const author = users.find((elm) => elm.id == post.userid);
          let daaata = "";
          if (post.date) {
            const ioD = parseISO(post.date);
            const tmpd = formatDistanceToNow(ioD);
            daaata = tmpd;
          }
          return (
            <div className="post" key={post.keyy}>
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
};

export default Posts;
