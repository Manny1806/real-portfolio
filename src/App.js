import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import Plx from "react-plx";

const leftSqrTopData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: 0,
        endValue: 66.35,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  
];

const leftSqrBottomData = [
  {
    start: 0,
    end: '20%',
    properties: [
      
      {
        startValue: 0,
        endValue: 66.35,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  
];

const bottomSqrLeftData = [
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: 0,
        endValue: 80,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  
];

const bottomSqrRightData = [
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: 0,
        endValue: 80,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  
];

const rightSqrTopData = [
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: 0,
        endValue: -66.35,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  
];

const rightSqrBottomData = [
  {
    start: '42%',
    end: '62%',
    properties: [
      
      {
        startValue: 0,
        endValue: -66.35,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  
];

const styles = {
  width: 120,
  height: 120,
  lineHeight: "100px",
  textAlign: "center",
  borderRadius: 0,
  backgroundColor: "#34ba9c",
  color: "#fff",
  left: 0,
  top: '7.69%',
  position: "absolute",
  fontFamily: "Helvetica, Arial, sans-serif",
  fontSize: 8
};



class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  
  render() {
    
    return (
      <div className="App">
        <div className="fixed-background-base">
          <div className='fixed-back-base-halfway-line'></div>
          <div className="first-background-top"></div>
          <div className="first-background-bottom"></div>
          <div className="first-background-left"></div>
          <div className="first-background-right"></div>
          <div className="fixed-background-second">
            <Plx className="left-moving-square-top" parallaxData={leftSqrTopData} />
            <Plx className="left-moving-square-bottom" parallaxData={leftSqrBottomData} />
            <Plx className="bottom-moving-square-left" parallaxData={bottomSqrLeftData} />
            <Plx className="bottom-moving-square-right" parallaxData={bottomSqrRightData} />
            <Plx className="right-moving-square-top" parallaxData={rightSqrTopData} />
            <Plx className="right-moving-square-bottom" parallaxData={rightSqrBottomData} />
            <div className="second-background-top"></div>
            <div className="second-background-bottom"></div>
          </div> 
        </div>
      
      </div>
    );
  }
}

export default App;
