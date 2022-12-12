import React from 'react'
import ComponentB from './ComponentB';

function ComponentA({x}) {
  const a = 5;
  const b = 2;
  return (
    <div>
      <p>ax + b ? (a = {a})</p>
      <p>ax + b ? (b = {b})</p>

      <ComponentB x={x} a={a} />
    </div>
  )
}

export default ComponentA