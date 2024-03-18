import React, { Component } from 'react'

export class HoverComp extends Component {
    state={
        count:0
    }
    mouseHoverHandler=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        });
    }
  render() {
    return (
      <div>
        <h3>Hover Component Count</h3>
        <h3 onMouseOver={this.mouseHoverHandler}>On Mouse Over{this.state.count}times</h3>
      </div>
    )
  }
}

export default HoverComp
