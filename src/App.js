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
      },
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '70%',
    end: '75%',
    properties: [
      {
        startValue: 66.35,
        endValue: 0,
        property: "translateY",
        unit: '%'
      }
    ]
  }
  
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
      },
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '65%',
    end: '70%',
    properties: [
      {
        startValue: 66.35,
        endValue: 0,
        property: "translateY",
        unit: '%'
      }
    ]
  }
  
];

const bottomSqrLeftData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      },
      {
        startValue: 0,
        endValue: 80,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
  
  
];

const bottomSqrRightData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      },
      {
        startValue: 0,
        endValue: 80,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  }
  
];

const rightSqrTopData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: 0,
        endValue: -66.35,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  }
  
];

const rightSqrBottomData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      
      {
        startValue: 0,
        endValue: -66.35,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  }
  
];

const topSqrLeftData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: 0,
        endValue: -133.3,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const topSqrRightData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: 0,
        endValue: -80,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const firstBackgroundTopData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const firstBackgroundBottomData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const firstBackgroundLeftData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const firstBackgroundRightData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const realBackgroundData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const secondBackgroundTop = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];

const colorChangeOnlyData = [
  {
    start: 0,
    end: '20%',
    properties: [
      {
        startValue: "#191970",
        endValue: "#228b22",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#228b22",
        endValue: "#87cefa",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: "#87cefa",
        endValue: "#fd5e53",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      {
        startValue: "#fd5e53",
        endValue: "#191970",
        property: "backgroundColor",
      }
    ]
  },
  
];



const movingSqrData = [
  {
    start: 0,
    end: '20%',
    properties: [
      
      {
        startValue: 0,
        endValue: 358.5,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: 0,
        endValue: 400,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      
      {
        startValue: 358.5,
        endValue: 0,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      
      {
        startValue: 400,
        endValue: 0,
        property: "translateX",
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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll(e){
    if (document.body.scrollTop > 13000 || document.documentElement.scrollTop > 13000) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    }
    
  }
  
  render() {
    
    return (
      <div className="App">
        <Plx className="real-background" parallaxData={colorChangeOnlyData}/>
        <Plx className="fixed-background-base">
          <Plx className='fixed-back-base-halfway-line'></Plx>
          <Plx className="first-background-top" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-bottom" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-left" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-right" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="fixed-background-second">
            <Plx className="moving-square" parallaxData={movingSqrData}/>
            <Plx className="left-moving-square-top" parallaxData={leftSqrTopData} />
            <Plx className="left-moving-square-bottom" parallaxData={leftSqrBottomData} />
            <Plx className="bottom-moving-square-left" parallaxData={bottomSqrLeftData} />
            <Plx className="bottom-moving-square-right" parallaxData={bottomSqrRightData} />
            <Plx className="right-moving-square-top" parallaxData={rightSqrTopData} />
            <Plx className="right-moving-square-bottom" parallaxData={rightSqrBottomData} />
            <Plx className="top-moving-square-left" parallaxData={topSqrLeftData} />
            <Plx className="top-moving-square-right" parallaxData={topSqrRightData} />
            <Plx className="second-background-top" parallaxData={colorChangeOnlyData}></Plx>
            <Plx className="second-background-bottom" parallaxData={colorChangeOnlyData}></Plx>
            <Plx className="second-background-inner-box-top" parallaxData={colorChangeOnlyData}></Plx>
            <Plx className="second-background-inner-box-bottom" parallaxData={colorChangeOnlyData}></Plx>
            <Plx className="second-background-inner-box-left" parallaxData={colorChangeOnlyData}></Plx>
            <Plx className="second-background-inner-box-right" parallaxData={colorChangeOnlyData}></Plx>
          </Plx>

          <Plx className="bio-title">bio</ Plx>
          <Plx className="skills-title">skills</ Plx>
          <Plx className="projects-title">projects</ Plx>
          <Plx className="connect-title">connect</ Plx>

        </Plx>
      
      </div>
    );
  }
}

export default App;
