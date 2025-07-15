import React from 'react'
import { useState } from 'react'

const ObjectsUpdating = () => {
  const[anime, setAnime] = useState({
    title : "Hunter X Hunter",
    ratings : 9,
  })

  const handleClick = () => setAnime({...anime, ratings: 10})



  return (
    <section>
      <h1>Name : {anime.title}</h1>
      <h2>Rating : {anime.ratings}</h2>
      <button onClick={handleClick}>Change Rating</button>
    </section>
  )
}

export default ObjectsUpdating