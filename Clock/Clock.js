import React, { Component } from 'react'

export class Clock extends Component {
    constructor(){
        console.log("constructor is caleed");
        super();
    this.state={
        time:new Date().toLocaleTimeString()
    }
   }
    componentDidMount(){
        console.log("Component did mount is called");
        setInterval(
          () =>{
            console.log("hi");
            this.setState({
            time:new Date().toLocaleTimeString()
          })
        },1000
        );
    }
    componentDidUpdate(){
        console.log("component did update called",this.state.time);
    }
    // componentWillUnmount(){
    //     console.log("component will unmout is called");
    //     clearInterval();
    //     //we will close all the oponed resuorces
    // }
  render() {
    console.log("Render method is called");
    return (
      <div>
        <h2>Time:{this.state.time}</h2>
      </div>
    )
  }
}

export default Clock;
