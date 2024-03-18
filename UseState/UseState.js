import React, { useState } from 'react'

const UseState=()=> {
    const [color,setColor]=useState("")
    const [value,setValue]=useState("Js")
  return (
    <div>
      <h2>using the state Hook Method {color}</h2>
      <button onClick={()=>setColor("Green")}>hi</button>
      <h2>The way of presenting the react {value}</h2>
    </div>
  )
}

export default UseState;
