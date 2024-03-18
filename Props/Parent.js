import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
  render() {
    const user = {
      firstname: "prasad",
      lastname: "venkat",
      address: "bglr",
    };
    return (
      <div>
        {/* passing empty props */}
        <Child>
        {/* passing user as props here  */}
        {/* <Child {...user}> */}
          <h3>this is Projected </h3>
          <h2>this is some other message</h2>
        </Child>
      </div>
    );
  }
}
export default Parent;
