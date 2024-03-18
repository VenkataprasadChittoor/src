import React from 'react';
import { useState,useEffect } from 'react';

function UseEffect() {
    const [time,setTime]=useState(0)
    useEffect(() => {
        let timer = setTimeout(() => {
        setTime((time) => time + 1);
      }, 1000);
    
      return () => clearTimeout(timer)
      }, []);
    
  return (
    <div>
      <h1>I've rendered {time} times!</h1>
    </div>
  )
}

export default UseEffect;
