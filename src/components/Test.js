import React, { useState } from "react";
import store from "../store";

const Test = () => {
  const [counterState, setCounterState] = useState(store.getState());

  store.subscribe(() => {
    setCounterState(store.getState());
  });

  return (
    <div>
      <h3>{counterState.count}</h3>
    </div>
  );
};

export default Test;
