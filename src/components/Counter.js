import React, { useState } from "react";
import store from "../store";
import { decrement, increment } from "../store/actions/type";
import Test from "./Test";

const Counter = () => {
  const [counterState, setCounterState] = useState(store.getState());

  const handleIncrement = () => store.dispatch({ type: increment });
  const handleDecrement = () => store.dispatch({ type: decrement });

  store.subscribe(() => {
    setCounterState(store.getState());
  });

  return (
    <div>
      <h4>
        <u>Counter</u>
      </h4>
      <p>Count value: {counterState.count}</p>
      <button onClick={() => handleIncrement()}>Increment</button>
      <button onClick={() => handleDecrement()}>Decrement</button>
      <Test></Test>
    </div>
  );
};

export default Counter;
