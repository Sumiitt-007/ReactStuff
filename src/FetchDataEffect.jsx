import React from 'react'
import {useState, useEffect} from 'react'

const FetchDataEffect = () => {
  const[data, setData] = useState([])

  useEffect(() => {
    async function getShit() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");

      const data = await response.json();

      if (data && data.length) {
        setData(data);
      }
    }
      getShit();
  },[])


  return (
    <div>
      <ul>
        {data.map(val => (
          <li key={Math.random()}>Title :{val.title}</li>)
        )}
      </ul>
    </div>
  )
}

export default FetchDataEffect