import React, { Component } from 'react';
import "./App2.css";
import "./moving-box.css"
class App2 extends Component {
    constructor() {
      super()
      this.state = {
        backgroundClass: "background-bio",
        innerLeftBoxClass: "inner-left-box-bio",
        leftMovingBoxClass: "left-moving-box-bio",
        rightBoxClass: "right-box-bio",
        movingBoxContentBioClass: "moving-box-content-bio-active",
        movingBoxContentSkillClass: "moving-box-content-skills-vert"
      }
      
    }

    render(){
        return(
        <div className = {`background ${this.state.backgroundClass}`}>
            <div className = "main-box">
                <div className = "left-box">
                    <div className = {`inner-left-box ${this.state.innerLeftBoxClass}`}>
                        <div className = "button-container">
                            <label className = "bio-button" onClick={()=>{
                                if(this.state.backgroundClass === "background-projects"){
                                    this.setState({
                                        backgroundClass: "background-skills",
                                        innerLeftBoxClass: "inner-left-box-skills",
                                        leftMovingBoxClass: "left-moving-box-skills",
                                        rightBoxClass: "right-box-skills"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-bio",
                                        innerLeftBoxClass: "inner-left-box-bio",
                                        leftMovingBoxClass: "left-moving-box-bio",
                                        rightBoxClass: "right-box-bio"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-bio",
                                        innerLeftBoxClass: "inner-left-box-bio",
                                        leftMovingBoxClass: "left-moving-box-bio",
                                        rightBoxClass: "right-box-bio",
                                        movingBoxContentBioClass: "moving-box-content-bio-active",
                                        movingBoxContentSkillClass: "moving-box-content-skills-vert"
                                    })
                                }
                                }}><span>bio</span></label>
                                <label className = "connect-button" onClick={()=>{
                                if(this.state.backgroundClass === "background-skills"){
                                    this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-connect",
                                        innerLeftBoxClass: "inner-left-box-connect",
                                        leftMovingBoxClass: "left-moving-box-connect",
                                        rightBoxClass: "right-box-connect"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-connect",
                                        innerLeftBoxClass: "inner-left-box-connect",
                                        leftMovingBoxClass: "left-moving-box-connect",
                                        rightBoxClass: "right-box-connect",
                                        movingBoxContentBioClass: "moving-box-content-bio-horz"
                                    })
                                }
                                }}>connect</label>
                            <label className = "skills-button" onClick={()=>{
                                if(this.state.backgroundClass === "background-connect"){
                                    this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-skills",
                                        innerLeftBoxClass: "inner-left-box-skills",
                                        leftMovingBoxClass: "left-moving-box-skills",
                                        rightBoxClass: "right-box-skills"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-skills",
                                        innerLeftBoxClass: "inner-left-box-skills",
                                        leftMovingBoxClass: "left-moving-box-skills",
                                        rightBoxClass: "right-box-skills",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-active"
                                    })
                                }
                                }}>skills</label>
                            <label className = "projects-button" onClick={()=>{
                                if(this.state.backgroundClass === "background-bio"){
                                    this.setState({
                                        backgroundClass: "background-skills",
                                        innerLeftBoxClass: "inner-left-box-skills",
                                        leftMovingBoxClass: "left-moving-box-skills",
                                        rightBoxClass: "right-box-skills"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects"
                                    })
                                }
                                }}>projects</label>
                            
                        </div>
                    </div>
                    <div className = {`left-moving-box ${this.state.leftMovingBoxClass}`}>
                                <div className = {`moving-box-content-bio ${this.state.movingBoxContentBioClass}`}>Alex Widner</div>
                                <div className = {`moving-box-content-skills ${this.state.movingBoxContentSkillClass}`}>Full Stack</div>
                    </div>
                </div>
                <div className = {`right-box ${this.state.rightBoxClass}`}></div>
            </div>
        </div>
        )
    }
}

export default App2;