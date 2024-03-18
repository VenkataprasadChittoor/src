import React, { Component } from 'react';
export  class Child extends Component  {
  render() {
    let {firstname,lastname,address,children}=this.props;
    console.log(this.props);
    console.log(children);
    return (
      <div>
        <h2>{firstname}{lastname}{address}</h2>
           {children}
      </div>
    )
  }
  
}
//passing the default values to the props
Child.defaultProps={
    firstname:'hi',
    lastname:'hellow',
    address:'chennai'
  }
export default Child;