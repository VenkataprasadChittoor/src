import React, { Component } from 'react'
 class Uncontrolledforms extends Component {
    constructor(){
        super();
        this.nameInput=React.createRef();
        console.log(this.nameInput);
        this.fileInput=React.createRef();
    }
    handleSubmit(event){
        alert(`A name that you entered is: ${this.nameInput.current.value}`);
        alert(this.fileInput.current.files[0].name);
        event.preventDefault();
    }
  render() {
    return (
      <div classname="container">
        <h2>React Forms</h2>
        <h3>Uncontrolledforms</h3>
        <form onSubmit={(e)=>this.handleSubmit(e)}><div className="mb-3">
            <label >
                name:
                </label>
                <input type="text" defaultValue="" ref={this.nameInput}></input>
                <label >
                Upload File:
                </label>
                <input type="file"  ref={this.fileInput}></input>
              
                </div>
                <button className="btn-btn-primary"
                        type="submit"
                        value="Submit"
                         >Submit</button>
        </form>
      </div>
    )
  }
}

export default Uncontrolledforms;
