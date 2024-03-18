
import React, { Component } from 'react'

export class Messages extends Component {
    constructor(){
        super();
            this.state={
                messages:"hi hellow Prasad",
                messages1:'hi vamsi'
              }
        // this.buttonClicked=this.buttonClicked.bind(this);
         }
        //  buttonClicked(){
        //   console.log("clicked");
        //   //not possible
        // //   this.state.messages="hi hellow prasad";
        // this.setState({
        //     messages:"hi hellow Universe"
        // });

        //  } 
         buttonClicked =(event)=>{
            //to know the type of event
            console.log(event);
            console.log("clicked");
            //not possible
          //   this.state.messages="hi hellow prasad";
          this.setState({
              messages:"hi hellow Universe",
              
          });
        }
        buttonClicked1 =(event)=>{
          //to know the type of event
          console.log(event);
          console.log("clicked");
          //not possible
        //   this.state.messages="hi hellow prasad";
        this.setState({
            messages1:"hi ",
            
        });
      }
     render(){
       return (
              <div>
                 <h1>{this.state.messages}</h1>
                 <h1>{this.state.messages1}</h1>
                 <button onClick= {this.buttonClicked}>subcribe</button>
                 <button onClick= {this.buttonClicked1}>Toggle</button>
              </div>
             )
           }
}

export default Messages;
