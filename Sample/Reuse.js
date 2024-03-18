import React from 'react';
import { useState } from 'react';

function Reuse() {
    const [expand, setExpand]=useState();
    const expandValue = ()=>setExpand((prevexpand)=>!prevexpand);
  return (
    <div>
      <h1>Reuse button</h1>
     <button onClick={expandValue}>Expand<span>{expand?"-":"+"}</span>
    </button> 
    {expand && <div><h1>
        this is the content
    </h1>
        </div> }
    </div>
  )
}

export default Reuse;
