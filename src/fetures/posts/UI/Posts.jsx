import PostForm from "./PostForm";
import { useSelector } from "react-redux";
import { getAllPosts } from "../postSlice";

const Posts = () => {
  const posts = useSelector(getAllPosts);
  const users = useSelector((state) => state.users);

  const RenderPost = () => {
    return (
      <>
        {posts.map((post) => {
          const author = users.find((elm) => elm.id == post.userid);
          return (
            <div className="post" key={post.id}>
              <h4>{post.title}</h4>
              <span>{author.name}</span>
              <p>{post.dec}</p>
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
