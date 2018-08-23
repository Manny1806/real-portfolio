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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
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
        endValue: "#000000",
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
        startValue: "#000000",
        endValue: "#191970",
        property: "backgroundColor",
        
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      
      {
        startValue: "#191970",
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
        endValue: "#000000",
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
      },
      {
        startValue: "#ffffff",
        endValue: "#000000",
        property: "borderColor",
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
      },
      {
        startValue: "#000000",
        endValue: "#ffffff",
        property: "borderColor",
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
  }, ]

  const backgroundData = [
    {
      start: 0,
      end: '41%',
      properties: [
        {
          startValue: "#000000",
          endValue: "#ffffff",
          property: "backgroundColor",
        }
      ]
    },
    
    {
      start: '42%',
      end: '83%',
      properties: [
        {
          startValue: "#ffffff",
          endValue: "#000000",
          property: "backgroundColor",
        }
      ]
    },
  
];

const bulbData = [
  
  {
    start: '2%',
    end: '6.5%',
    properties: [
      {
        startValue: -50,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      
    ]
  },
  {
    start: '6.5%',
    end: '8%',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacityFilter",
        unit: '%'
      },
      
    ]
  },
  

];

const bulbOnData = [
  {
    start: '0%',
    end: '6.5%',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacityFilter",
        unit: '%'
      }
    ]
  },
  {
    start: '6.5%',
    end: '12%',
    properties: [
      {
        startValue: 0,
        endValue: 50,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 1,
        endValue: 1,
        property: "opacityFilter",
        unit: '%'
      }
    ]
  },
  

];

const bulbOnLightData = [
  {
    start: '0%',
    end: '6.5%',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacityFilter",
        unit: '%'
      }
    ]
  },
  {
    start: '6.5%',
    end: '12%',
    properties: [
      {
        startValue: 0,
        endValue: 50,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0.75,
        endValue: 0.75,
        property: "opacityFilter",
        unit: '%'
      }
    ]
  },
  

];

const bioTitleData = [
  {
    start: '0',
    end: '12%',
    properties: [
      {
        startValue: 0,
        endValue: -80,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '71%',
    end: '83%',
    properties: [
      {
        startValue: -80,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
        unit: '%'
      }
    ]
  },
];

const skillsTitleData = [
  {
    start: '8%',
    end: '20%',
    properties: [
      {
        startValue: 80,
        endValue: 0,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '21%',
    end: '33%',
    properties: [
      {
        startValue: 0,
        endValue: -80,
        property: "translateX",
        unit: '%'
      }
    ]
  },
];

const coffee1Data = [
  
  {
    start: '7.5%',
    end: '12.5%',
    properties: [
      {
        startValue: 200,
        endValue: -100,
        property: "translateX",
        unit: '%'
      },
      
    ]
  },
]

const coffee2Data = [
  
  {
    start: '9%',
    end: '17%',
    properties: [
      {
        startValue: 400,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      
    ]
  },
]

const coffee3Data = [
  
  {
    start: '8%',
    end: '25%',
    properties: [
      {
        startValue: 55,
        endValue: -100,
        property: "translateX",
        unit: '%'
      },
      
    ]
  },
]

const coffee4Data = [
  
  {
    start: '13%',
    end: '18%',
    properties: [
      {
        startValue: 0,
        endValue: -400,
        property: "translateX",
        unit: '%'
      },
      
    ]
  },
]

const bioNameData = [
  
  {
    start: '0%',
    end: '20%',
    properties: [
      {
        startValue: 0,
        endValue: -84,
        property: "translateY",
        unit: '%'
      },
      
    ]
  },
]





// const styles = {
//   width: 120,
//   height: 120,
//   lineHeight: "100px",
//   textAlign: "center",
//   borderRadius: 0,
//   backgroundColor: "#34ba9c",
//   color: "#fff",
//   left: 0,
//   top: '7.69%',
//   position: "absolute",
//   fontFamily: "Helvetica, Arial, sans-serif",
//   fontSize: 8
// };



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
        <Plx className="fixed-background-base" parallaxData={backgroundData}>
          <Plx className='fixed-back-base-halfway-line'></Plx>
          <Plx className="first-background-top" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-bottom" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-left" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-right" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="fixed-background-second" parallaxData={backgroundData}>
            <Plx className="left-column" parallaxData={colorChangeOnlyData}/>
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
            <Plx className="bio-title" parallaxData={bioTitleData}>bio</ Plx>
            <Plx className="light-bulb" parallaxData={bulbData}><img src="idea.png"/></ Plx>
            <Plx className="light-bulb-on" parallaxData={bulbOnData}><img src="ideaOn.png"/></ Plx>
            <Plx className="light-bulb-on-light" parallaxData={bulbOnLightData}><img src="ideaOnLight.png"/></ Plx>
            <Plx className="skills-title" parallaxData={skillsTitleData}>skills</ Plx>
            <Plx className="projects-title">projects</ Plx>
            <Plx className="connect-title">connect</ Plx>

            <Plx className="bio-name" parallaxData={bioNameData}>ALEX WIDNER</Plx>
            <Plx className="bio-box"></Plx>
            <Plx className="skills-image" parallaxData={bioNameData}><img src="https://res.cloudinary.com/disoi1bmd/image/upload/v1535002529/full-stack6.png"/></Plx>

            <Plx className="coffee-2" parallaxData={coffee2Data}><img src="coffee.png"/></ Plx>
            <Plx className="coffee-1" parallaxData={coffee1Data}><img src="coffee.png"/></ Plx>
            <Plx className="coffee-4" parallaxData={coffee4Data}><img src="coffee.png"/></ Plx>
            <Plx className="coffee-3" parallaxData={coffee3Data}><img src="coffee.png"/></ Plx>
            
            

          </Plx>

          
          
        </Plx>
      
      </div>
    );
  }
}

export default App;
