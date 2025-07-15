import React from 'react'
const greet = "Hello Dost!!";
const date =  new Date();
const Greeting = () => {

  return (
    <div>
      <h1>{greet}</h1>
      <p>{date.getDate()}</p>
    </div>
  )
}

export default Greeting