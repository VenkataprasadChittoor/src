import React, { Component } from 'react'

 class Classcmp extends Component {
  state={
    name:"prasad",
  }
  render() {
    return (
      
        <div>
    <h1> this is the example of functional based components</h1>
    <h2>These are the stateless and without render part </h2>
    <button onClick={()=>this.setState({name:"venkata prasad"})}></button>
    </div>
    
    )
  }
}
export default Classcmp;

