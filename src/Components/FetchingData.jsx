import React from 'react'

const FetchingData = () => {
  const[data, setData] = useState([]);

  useEffect(()=> {
    async function getData() {
     const response = await fetch("https://jsonplaceholder.typicode.com/todos")  
     
     const data = await response.json();

     if (data && data.length) {
        setData(data);
     }
    }

    getData();
  },[])

  return <div>
    <ul>
      {data.map(val =>(
        <li key={val.id}>{val.title}</li>
      ) )}
    </ul>
  </div>
}

export default FetchingData