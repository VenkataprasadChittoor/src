import React, { Component } from 'react';
 class UsingIfElse extends Component {
    constructor(){
        super();
        this.state={
            isLoggedIn:true
        }
    }
    isCliked(){
        this.setState(
            {
                isLoggedIn: !this.state.isLoggedIn
            }
        )
    }
  render() {
    return(
        <>
        <h1>Condiotional Rendering</h1>
        <button onClick={()=>this.isCliked()}>Toggle</button>
       { this.state.isLoggedIn ? <h3>welcome prasad </h3> :<h3>hi prasad</h3> }
        </>
        )
    }
    //   </h3>using If Else
    //  if(this.state.isLoggedIn ){

    //    return (
    //         <h3> hellow prasad </h3>
    //     )    
    //     }
    //  else{
    //      return(
    //      <h3>hi prasad welcome</h3>
    //     )
    //  }
    // //simple
    //  return (
    //    <div>
    //      <h3>hi prasad</h3>
    //      <h3>hellow prasad</h3>
    //    </div>
    //  ) 
  } 



export default UsingIfElse;
