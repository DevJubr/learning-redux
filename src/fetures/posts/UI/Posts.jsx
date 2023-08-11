import PostForm from "./PostForm";
import { useSelector } from "react-redux";
import { getAllPosts } from "../postSlice";
import { formatDistanceToNow, parseISO } from "date-fns";
import ReacttionsUi from "./ReacttionsUi";

const Posts = () => {
  const posts = useSelector(getAllPosts);
  const users = useSelector((state) => state.users);

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
            <div className="post" key={post.id}>
              <h4>{post.title}</h4>
              <span>{author ? author.name : "anonimas"}</span>
              <span>{daaata}</span>
              <p>{post.dec}</p>

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
