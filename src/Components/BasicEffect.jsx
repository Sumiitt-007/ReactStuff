import React, { useEffect, useState } from 'react'

const BasicEffect = () => {
  const[something, setSomething] = useState(0);


  useEffect(() => {
    console.log("Rendered");
  },[]);
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect