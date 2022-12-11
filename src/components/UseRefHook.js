import React, { useRef, useState } from "react";

const UseRefHook = () => {
  console.log("function callBack...");
  // let counter = 0; kq : test thử biết
  let counter = useRef(0)
  const [myState, setMyState] = useState("A");

  const updateState = () => {
    counter.current ++
    setMyState(myState + '-u-');
    console.log("counter: " + counter.current)
  };

  return (
    <div>
      <h1>MyState : {myState}</h1>
      <input
        type="button"
        onClick={() => updateState()}
        value="Update State"
      ></input>
    </div>
  );
};

export default UseRefHook;
