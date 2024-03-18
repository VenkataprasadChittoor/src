import React, { Component } from "react";

export class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incCount() {
    // //asynchronous
    // this.setState({
    //     count:this.state.count+1

    // },()=>{
    //     console.log(this.state.count);
    // }//making synchronous by using call back function
    // )
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }
  incFive = () => {
    this.incCount();
    this.incCount();
    this.incCount();
    this.incCount();
    this.incCount();
  };
  render() {
    return (
      <div>
        <h1>Counter {this.state.count}</h1>
        <button onClick={() => this.incFive()}>hellow</button>
      </div>
    );
  }
}

export default Count;
