import React, { useRef } from 'react'

const FocusInput = () => {

  const val = useRef(null);
  const focusVal = () => {
    val.current.focus();
    val.current.value = "Just Do It"
  }


  return (
    <div>
      <input type="text" ref={val} />
      <button onClick={() => focusVal()}>Focus</button>  
    </div>
  )
}

export default FocusInput