import React from 'react'
import { useState } from 'react'

const Profile = () => {
  const[profile, setProfile] = useState({
    name : "",
    age: "",
  });
  
  const handleChange = (e) => {
    const {name , value} = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name] : value,
    }))
  }

  return <div>
    <h2>User Profile</h2>
      <div>
        <label>Name : 
          <input type="text" value={profile.name} name = "name" onChange={handleChange}/>
        </label>
      </div>

      <div>
        <label>Age : 
          <input type="number" value={profile.age} name = "age" onChange={handleChange} />
        </label>
      </div>

      <h3>Profile Information</h3>
      <p>Name : {profile.name}</p>
      <p>Age : {profile.age}</p>
  </div>

}

export default Profile