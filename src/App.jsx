import { useDispatch, useSelector } from "react-redux";
import { incriment, dicriment } from "./fetures/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <button>count is {count}</button>
        <br />
        <br />
        <button onClick={() => dispatch(incriment())}>+</button>
        <button onClick={() => dispatch(dicriment())}>-</button>
      </div>
    </>
  );
}

export default App;
