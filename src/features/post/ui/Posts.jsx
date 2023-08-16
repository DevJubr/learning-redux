import { useDispatch, useSelector } from "react-redux";
import { fetchPost, getPosts, getStatus } from "../PostSlice";
import { useEffect } from "react";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPosts);
  const Status = useSelector(getStatus);
  console.log(Status);
  useEffect(() => {
    if (Status === "idle") {
      dispatch(fetchPost());
    }
  }, [Status]);

  return (
    <>
      {Status === "loading" ? (
        <h1>loading</h1>
      ) : (
        <>
          <PostForm />
          {data?.map((item) => (
            <PostItem item={item} />
          ))}
        </>
      )}
    </>
  );
};

export default Posts;
