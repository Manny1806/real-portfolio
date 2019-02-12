import React, { Component } from 'react';
import "./App2.css";
class App2 extends Component {
    constructor() {
      super()
      this.state = {
        backgroundClass: "background-bio",
        innerLeftBoxClass: "inner-left-box-bio",
        leftMovingBoxClass: "left-moving-box-bio",
        rightBoxClass: "right-box-bio"
      }
      
    }

    render(){
        return(
        <div className = {`background ${this.state.backgroundClass}`}>
            <div className = "main-box">
                <div className = "left-box">
                    <div className = {`inner-left-box ${this.state.innerLeftBoxClass}`}>
                        <div className = "button-container">
                            <label className = "bio-button">bio</label>
                            <label className = "skills-button">skills</label>
                            <label className = "projects-button">projects</label>
                            <label className = "connect-button">connect</label>
                        </div>
                    </div>
                    <div className = {`left-moving-box ${this.state.leftMovingBoxClass}`}></div>
                </div>
                <div className = {`right-box ${this.state.rightBoxClass}`}></div>
            </div>
        </div>
        )
    }
}

export default App2;