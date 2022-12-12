import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/CounterContext'

function ComponentC({ a, b}) {
  const [ result, setResult ] = useState()
  const { counter } = useAppContext()

  const handleRs = () => {
    const result = a*counter + b;
    setResult(result)
  }

  useEffect(() => {
    handleRs()

    console.log('ok')
  }, [counter])

  return (
    <div>
    <h1>ax + b = {result}</h1>
    </div>
  )
}

export default ComponentC