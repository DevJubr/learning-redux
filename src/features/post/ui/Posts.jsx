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

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <span> {item.date} time age</span>
        </div>
      ))}
    </>
  );
};

export default Posts;
