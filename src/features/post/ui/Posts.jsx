import { useDispatch, useSelector } from "react-redux";
import { fetchPost, getPosts, getStatus } from "../PostSlice";
import { useEffect } from "react";

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

  return <div>Posts</div>;
};

export default Posts;
