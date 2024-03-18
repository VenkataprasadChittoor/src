import React, { Component } from 'react'

class Propsusingclass extends Component {
  render() {
    console.log(this.props)
    return (

      <div>
        <h1>{this.props.greet} Prasad</h1>
      </div>
    )
  }
}

export default Propsusingclass;
