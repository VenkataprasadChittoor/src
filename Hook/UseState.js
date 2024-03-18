import React,{useState} from 'react';

 function UseState() {
   let [name,setName]=useState("manasa");
    function changeName(){
    if( name === "manasa"){
         setName(
            name="prasad"
         )
    }
    else{
        setName(
        name="manasa")
    }
   }
  return (
    <div>
      <h3>Name:{name}</h3>
      <button onClick={changeName}>Toggle</button>
    </div>
  )
}
export default UseState;