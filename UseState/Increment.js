import React from 'react';
import { useState } from 'react';

function Increment() {
    const [count , setCount]=useState(0);
    const [count1,setCount1]=useState(10);
    const Increment =()=>{
        setCount(count+1);
        let counter=count;
        alert(counter);
    }
    const Decrement =()=>{
        if(count<=0){
        setCount1(count1-1);
         alert(count1);
    }}
  return (
    <div>
      <h1>Increment value is{count}
        <input type="button" onClick={Increment} value="inc" />
       
      </h1>
      <h1> Decrement value is {count1}
      <input type="button" onClick={Decrement} value="dec" />
       
      </h1>
    </div>
  )
}

export default Increment;
