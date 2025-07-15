import React from 'react'
import { useState } from 'react'

const TodoList = () => {
  const[list, setList] = useState([]);
  const[inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim()){
      setList([...list, inputValue]);
      setInputValue("");
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return <section>
    <h1>ToDo List : </h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange = {handleChange} placeholder='Enter Goal'/>
      <button type='submit'>Add</button>
    </form>

    <ul>
      {list.map((task , index) =>(
          <li key={index}>{task}</li>
      ))}
    </ul>

  </section>
  
}

export default TodoList