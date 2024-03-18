import React, { Component } from "react";
class Controlledforms extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      loc: "",
      area: ""
    };
  }
  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={this.target.username}
              name="username"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              value={this.target.loc}
              name="loc"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>area:</label>
            <select
              value={this.target.area}
              name="area"
              onChange={this.changeHandler}
            >
              <option>Ramapuram</option>
              <option>Guindy</option>
              <option>MerinaBeach</option>
            </select>
          </div>
          <div>
            <button type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Controlledforms;
