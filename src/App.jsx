import Add from "./Components/Add";
import BasicEffect from "./Components/BasicEffect";
import { useState,useEffect } from "react";
import { useReducer } from "react";
import Counter from "./Counter";


// If we don't provide Dependency Array to our useEffect, the callback function will fire every single time when the component re-renders



const App = () => {  
 return <div>
    <Counter/>
 </div>
}





export default App;