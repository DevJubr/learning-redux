import { useDispatch, useSelector } from "react-redux";
import {
  incriment,
  dicriment,
  incrimentByn,
  reset,
} from "./fetures/counter/counterSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const [incrimentByN, setincrimentByN] = useState(0);
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
        <br />
        <br />
        <input
          type="text"
          value={incrimentByN}
          onChange={(e) => setincrimentByN(e.target.value)}
        />
        <br />
        <button onClick={() => dispatch(incrimentByn(incrimentByN))}>
          incriment by {incrimentByN}
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default App;
