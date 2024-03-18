import React, { Component } from 'react'

class ClickedComp extends Component {
    state={
        count:0
    }
    ClickHandler=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        });
    }
  render() {
    return (
      <div>
        <h2>Higher Order Component</h2>
        <h3>Clicked Component</h3>
        <button onClick={this.ClickHandler}>Click{this.state.count}times</button>
      </div>
    )
  }
}

export default ClickedComp
