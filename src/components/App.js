import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  const initialWidth=300;
  const initialHeigth=300;
  const [width, setWidth]=useState(initialWidth);
  const [height, setHeight]=useState(initialHeigth);

  const handleClick=()=>{
    setWidth((prevWidth)=>prevWidth+2);
    setHeight((prevHeight)=>prevHeight+2);
  }
  
  return (
    <div id="main">
      <img src={star} alt="Star" height={`${height}px'} width={'${width}px'}  onClick={handleClick}/>
    </div>
  )
}


export default App;
