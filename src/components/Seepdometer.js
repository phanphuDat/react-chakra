import React, { useEffect, useState } from "react";

const Seepdometer = () => {
  const [speed, setSpeed] = useState(20);
  const [count, setCount] = useState(0);

  useEffect(()=> {
    console.log(`you clicked ${count} times`)
    return (() => console.log("cleanup"))
  }, [count])


  return (
    <div>
      <p className="title"> useState </p>
      <h3> speed : {speed}</h3>
      <button onClick={() => setSpeed(speed + 1)}>Increment</button>
      <button onClick={() => setSpeed(speed - 1)}>Decrement</button>
      <hr />
      <p className="title"> useEffect </p>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click</button>
    </div>
  );
};

export default Seepdometer;
