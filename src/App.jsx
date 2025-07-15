import Add from "./Components/Add";
import { use, useState } from "react";



const App = () => {
   const [friends, setFriends] = useState(["Kenny","Byakuya"]);
   const addFriend = () => setFriends([...friends, "Ichigo"])
   const removeFriend = () => setFriends(friends.filter(friend => friend != 'Kenny'));


   return (
      <section>
        {friends.map((friend) => (
          <li key={Math.random()}>{friend}</li>
        ))}

        <button onClick={addFriend}>Add Friend</button>
        <button onClick={removeFriend}>Remove Friend</button>
      </section>
   );
}



export default App;