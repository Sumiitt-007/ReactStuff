import React from 'react'

const UpdatingArrayOfObjects = () => {
  const[anime, setAnime] = useState ([
    {id : 1, title: "Bleach", rating: 9},
    {id : 2, title: "Demon Slayer", rating: 8.5},
  ])

  const handleCheck = () => setAnime(anime.map(anime => (anime.id === 2 ? {...anime, title: "Hunter X Hunter"} : anime )));

return <section>
  {anime.map(anime => (
    <li key={anime.id}>{anime.title}</li>
  ))}

  <button onClick={handleCheck}>Change Name</button>
</section>
}

export default UpdatingArrayOfObjects