
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData]=useState({});
  
  function onMouseMove(e){
    setData(e)

  }
  
  useEffect(()=>{
    window.addEventListener("mousemove",onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  },[]);
 
  
  

  return (
    <div>
        {/* Do not remove the main div */}
        The mouse Pointer is: {data.x+','+data.y}
    </div>
  )
}

export default App
