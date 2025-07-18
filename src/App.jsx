import Add from "./Components/Add";
import BasicEffect from "./Components/BasicEffect";
import { useState,useEffect } from "react";
import Switcher from "./Components/Switcher";
import CounterEffect from "./Components/CounterEffect";
import FetchDataEffect from "./FetchDataEffect";


// If we don't provide Dependency Array to our useEffect, the callback function will fire every single time when the component re-renders

const App = () => {  
  
  return <div>
    <FetchDataEffect/>
  </div>
}





export default App;