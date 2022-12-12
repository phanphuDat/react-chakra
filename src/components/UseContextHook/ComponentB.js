import React from "react";
import ComponentC from "./ComponentC";

function ComponentB({a, x}) {
  const b = 2;
  return (
    <div>
      <p>ax + b ? (b = {b})</p>
      {" x là tùy biến "}

      <ComponentC a={a} x={x} b={b} />
    </div>
  );
}

export default ComponentB;
