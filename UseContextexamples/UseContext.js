import React from 'react';
import {useState,UseContext,createContext} from 'react';


 const UserContext=createContext();
function UseContext1() {
  const [user  , setUser]=useState("prasad");
  return (
    <div>
        <UserContext.Provider value={user}>
      <h1>{`My name is ${user}`}</h1>
      
      <ComponentA/>
      </UserContext.Provider>
    </div>
  )
}
function ComponentA(){
    return(
        <div>
        <h1>hello component A</h1>
        <ComponentB/>
        </div>
    );

}
function ComponentB(){
    const [user1 , setUser1]=useState("Venkataprasad")
    const user=UseContext(UserContext)
    return(
        <div>
            <h1>{`hellow ${user1}`}</h1>
        <h2>
          { ` hi hellow this useContext example${user}`}
        </h2>
        <button  onClick={() => setUser1("venkat")} >
           press</button>
        </div>

    );
}

export default UseContext1;
