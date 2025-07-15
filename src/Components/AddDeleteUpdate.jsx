import React from 'react'

const AddDeleteUpdate = () => {
   const [friends, setFriends] = useState(["Kenny","Byakuya"]);
   const addFriend = () => setFriends([...friends, "Ichigo"])
   const removeFriend = () => setFriends(friends.filter(friend => friend != 'Kenny'));
   const updateFriend = () => {
    setFriends(friends.map((friend) => (friend === 'Kenny' ? "Zaraki" : friend)));
   }


   return (
      <section>
        {friends.map((friend) => (
          <li key={Math.random()}>{friend}</li>
        ))}

        <button onClick={addFriend}>Add Friend</button>
        <button onClick={removeFriend}>Remove Friend</button>
        <button onClick={updateFriend}>Update a Friend</button>
      </section>
   );
}

export default AddDeleteUpdate