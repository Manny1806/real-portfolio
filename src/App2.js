import React, { Component } from 'react';
import "./App2.css";
import "./moving-box.css"
import "./right-box.css"
class App2 extends Component {
    constructor() {
      super()
      this.state = {
        backgroundClass: "background-bio",
        innerLeftBoxClass: "inner-left-box-bio",
        leftMovingBoxClass: "left-moving-box-bio",
        rightBoxClass: "right-box-bio",
        rightMovingBoxClass: "right-moving-box-bio",
        movingBoxContentBioClass: "moving-box-content-bio-active",
        movingBoxContentSkillClass: "moving-box-content-skills-vert",
        movingBoxContentProjectsClass: "moving-box-content-projects-horz",
        movingBoxContentConnectClass: "moving-box-content-connect-horz"
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
                                        rightBoxClass: "right-box-skills",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-active",
                                        movingBoxContentProjectsClass: "moving-box-content-projects-horz",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-bio",
                                        innerLeftBoxClass: "inner-left-box-bio",
                                        leftMovingBoxClass: "left-moving-box-bio",
                                        rightBoxClass: "right-box-bio",
                                        movingBoxContentBioClass: "moving-box-content-bio-active",
                                        movingBoxContentSkillClass: "moving-box-content-skills-vert",
                                        movingBoxContentProjectsClass: "moving-box-content-projects-horz",
                                        movingBoxContentConnectClass: "moving-box-content-connect-horz"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-bio",
                                        innerLeftBoxClass: "inner-left-box-bio",
                                        leftMovingBoxClass: "left-moving-box-bio",
                                        rightBoxClass: "right-box-bio",
                                        rightMovingBoxClass: "right-moving-box-bio",
                                        movingBoxContentBioClass: "moving-box-content-bio-active",
                                        movingBoxContentSkillClass: "moving-box-content-skills-vert",
                                        movingBoxContentProjectsClass: "moving-box-content-projects-horz",
                                        movingBoxContentConnectClass: "moving-box-content-connect-horz"
                                    })
                                }
                                }}><span>bio</span></label>
                            <label className = "connect-button" onClick={()=>{
                                if(this.state.backgroundClass === "background-skills"){
                                    this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-horz",
                                        movingBoxContentProjectsClass: "moving-box-content-skills-active",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-connect",
                                        innerLeftBoxClass: "inner-left-box-connect",
                                        leftMovingBoxClass: "left-moving-box-connect",
                                        rightBoxClass: "right-box-connect",
                                        movingBoxContentBioClass: "moving-box-content-bio-horz",
                                        movingBoxContentSkillClass: "moving-box-content-skills-horz",
                                        movingBoxContentProjectsClass: "moving-box-content-skills-vert",
                                        movingBoxContentConnectClass: "moving-box-content-connect-active"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-connect",
                                        innerLeftBoxClass: "inner-left-box-connect",
                                        leftMovingBoxClass: "left-moving-box-connect",
                                        rightBoxClass: "right-box-connect",
                                        rightMovingBoxClass: "right-moving-box-connect",
                                        movingBoxContentBioClass: "moving-box-content-bio-horz",
                                        movingBoxContentSkillClass: "moving-box-content-skills-horz",
                                        movingBoxContentProjectsClass: "moving-box-content-skills-vert",
                                        movingBoxContentConnectClass: "moving-box-content-connect-active"
                                    })
                                }
                                }}>connect</label>
                            <label className = "skills-button" onClick={()=>{
                                if(this.state.backgroundClass === "background-connect"){
                                    this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-horz",
                                        movingBoxContentProjectsClass: "moving-box-content-skills-active",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-skills",
                                        innerLeftBoxClass: "inner-left-box-skills",
                                        leftMovingBoxClass: "left-moving-box-skills",
                                        rightBoxClass: "right-box-skills",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-active",
                                        movingBoxContentProjectsClass: "moving-box-content-projects-horz",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-skills",
                                        innerLeftBoxClass: "inner-left-box-skills",
                                        leftMovingBoxClass: "left-moving-box-skills",
                                        rightBoxClass: "right-box-skills",
                                        rightMovingBoxClass: "right-moving-box-skills",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-active",
                                        movingBoxContentProjectsClass: "moving-box-content-projects-horz",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })
                                }
                                }}>skills</label>
                            <label className = "projects-button" onClick={()=>{
                                if(this.state.backgroundClass === "background-bio"){
                                    this.setState({
                                        backgroundClass: "background-skills",
                                        innerLeftBoxClass: "inner-left-box-skills",
                                        leftMovingBoxClass: "left-moving-box-skills",
                                        rightBoxClass: "right-box-skills",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-active",
                                        movingBoxContentProjectsClass: "moving-box-content-projects-horz",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })
                                    setTimeout(()=>{this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-horz",
                                        movingBoxContentProjectsClass: "moving-box-content-skills-active",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })}, 1000)
                                } else {
                                    this.setState({
                                        backgroundClass: "background-projects",
                                        innerLeftBoxClass: "inner-left-box-projects",
                                        leftMovingBoxClass: "left-moving-box-projects",
                                        rightBoxClass: "right-box-projects",
                                        rightMovingBoxClass: "right-moving-box-projects",
                                        movingBoxContentBioClass: "moving-box-content-bio-vert",
                                        movingBoxContentSkillClass: "moving-box-content-skills-horz",
                                        movingBoxContentProjectsClass: "moving-box-content-skills-active",
                                        movingBoxContentConnectClass: "moving-box-content-connect-vert"
                                    })
                                }
                                }}>projects</label>
                            
                        </div>
                    </div>
                    <div className = {`left-moving-box ${this.state.leftMovingBoxClass}`}>
                                <div className = {`moving-box-content-bio ${this.state.movingBoxContentBioClass}`}>Alex Widner</div>
                                <div className = {`moving-box-content-skills ${this.state.movingBoxContentSkillClass}`}>Full Stack</div>
                                <div className = {`moving-box-content-projects ${this.state.movingBoxContentProjectsClass}`}>Projects</div>
                                <div className = {`moving-box-content-connect ${this.state.movingBoxContentConnectClass}`}>Connect</div>
                    </div>
                </div>
                <div className = {`right-box ${this.state.rightBoxClass}`}>
                    <div className = {`moving-right-box-container ${this.state.rightMovingBoxClass}`}>
                            <div className="right-bio-box">
                                <p>I am a web developer based in Portland, OR.</p>
                                <img src="https://res.cloudinary.com/siouxcitymusic/image/upload/v1550296888/portland.png"/>
                                <p>However, I like to think of myself as a fanatic problem solver who
                                    isn't afraid to think outside of the box.</p>
                            </div>
                            <div className="right-skills-box"></div>
                            <div className="right-projects-box"></div>
                            <div className="right-connect-box"></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App2;