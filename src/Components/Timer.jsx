import React, { useEffect, useRef, useState } from 'react'


const Timer = () => {
  const[count, setCount] = useState(0);
  const interVal = useRef(null);

  useEffect(() => {
    interVal.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    },1000)
  },[])
  return (
    <div>
      <h1>Timer : {count} seconds</h1>
      <button onClick={() => clearInterval(interVal.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer