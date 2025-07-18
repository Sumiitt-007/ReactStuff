import React from 'react'
import { useReducer, useState } from 'react'
import { initialState, counterReducer } from './counterReducer'

const Counter = () => {

  const[ state, dispatch] = useReducer(counterReducer,initialState);

  const[inputValue, setInputValue] = useState(0);

  const handleIncrement = () => dispatch({type: 'increment'})
  const handleDecrement = () => dispatch({type: 'decrement'})

  const handleIncrementByAmount = () => {
    dispatch({type : 'incrementByAmount',payload : Number(inputValue)})
  }

  const handleDecrementByAmount = () => {
    dispatch({type : 'decrementByAmount', payload: Number(inputValue)})
  }
  


  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <div>
        <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>

        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>

    </div>
  )
}

export default Counter