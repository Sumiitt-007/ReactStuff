import Add from "./Components/Add";
import BasicEffect from "./Components/BasicEffect";
import FocusInput from "./Components/FocusInput";
 
import { useRef } from "react";
import Timer from "./Components/Timer";

// If we don't provide Dependency Array to our useEffect, the callback function will fire every single time when the component re-renders



const App = () => {  

   // const inputElement = useRef(null);

   // const focusInput = () => {
   //    inputElement.current.focus();
   //    inputElement.current.value = "BooM!!"
   
 return <div>
   <Timer />
   {/* <input type="text" ref={inputElement} />
   <button onClick={() => focusInput()}>Focus & Write</button> */}
 </div>
}





export default App;