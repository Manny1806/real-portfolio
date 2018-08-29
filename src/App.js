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

const connectTitleData = [
  {
    start: '50%',
    end: '62%',
    properties: [
      {
        startValue: -80,
        endValue: 0,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '63%',
    end: '75%',
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
        endValue: -290,
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
  {
    start: '21%',
    end: '22%',
    properties: [
      {
        startValue: -90,
        endValue: -90,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
        unit: '%'
      },
    ]
  },
  {
    start: '78%',
    end: '83%',
    properties: [
      {
        startValue: -85,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
    ]
  },
]

const skillsNameData = [
  
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
  {
    start: '21%',
    end: '33%',
    properties: [
      {
        startValue: 0,
        endValue: -85,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  
]

const skillsBoxContentData = [
  {
    start: '0%',
    end: '1%',
    properties: [
      {
        startValue: 100,
        endValue: 100,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '2.5%',
    end: '20%',
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '21%',
    end: '34%',
    properties: [
      {
        startValue: 0,
        endValue: -100,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  {
    start: '35%',
    end: '36%',
    properties: [
      {
        startValue: 100,
        endValue: 100,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 0,
        property: "translateX",
        unit: '%'
      }
    ]
  },
]

const skillsBoxData = [
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

const projectsTitleData = [
  
  {
    start: '34%',
    end: '41%',
    properties: [
      {
        startValue: 84,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      
    ]
  },
  {
    start: '42%',
    end: '57%',
    properties: [
      {
        startValue: 0,
        endValue: 85,
        property: "translateY",
        unit: '%'
      }
    ]
  },
]

const projectsBoxData = [
  
  {
    start: '0%',
    end: '1%',
    properties: [
      {
        startValue: 100,
        endValue: 100,
        property: "translateX",
        unit: '%'
      },
      
    ]
  },
  {
    start: '33%',
    end: '41%',
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateX",
        unit: '%'
      }
    ]
  },
  {
    start: '42%',
    end: '60%',
    properties: [
      {
        startValue: 0,
        endValue: 120,
        property: "translateY",
        unit: '%'
      }
    ]
  },
]

const bioBoxNameData = [
  {
    start: '21%',
    end: '41%',
    properties: [
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
        startValue: "#000000",
        endValue: "#ffffff",
        property: "borderColor",
      }
    ]
  },
]

const bioBoxContentData = [
  {
    start: '0%',
    end: '18%',
    properties: [
      {
        startValue: 0,
        endValue: -100,
        property: "translateY",
        unit: '%'
      }
    ]
  },
]

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

            <Plx className="second-background-box" parallaxData={backgroundData}></Plx>
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
            <Plx className="projects-title" parallaxData={projectsTitleData}>projects</ Plx>
            <Plx className="connect-title"parallaxData={connectTitleData}>connect</ Plx>

            <Plx className="bio-name" parallaxData={bioNameData}>ALEX WIDNER</Plx>
            <Plx className="bio-box" parallaxData={bioBoxNameData}></Plx>
            <Plx className="bio-content" parallaxData={bioBoxContentData}>I am a full stack developer.<br/><br/>
            More importantly though I am a problem solving fanatic with a relentless devotion to efficiency.<br/><br/>
            I bring an 'above and beyond' approach to my work because I believe my goals should not be limited by familiarity or job descriptions.</Plx>

            <Plx className="skills-image" parallaxData={skillsNameData}>FULL STACK</Plx>
            <Plx className="skills-content" parallaxData={skillsBoxContentData}>Front End Skills: HTML, CSS, JavaScript, React, React-plx, Redux, JQuery<br/><br/>
            Back End Skills: Node.js, Express, MongoDB, Mocha, Chai, SQL<br/><br/>
            Soft Skills: Quick Learner, Adaptive, Strong communication, Organized, Dependable</Plx>

            <Plx className="content-box" parallaxData={bioBoxNameData}></Plx>

            <Plx className="projects-box" parallaxData={projectsBoxData}>
              <div><div className="project-button-1">1.</div>
              <div className="project-button-2">2.</div></div>
              <div><div className="project-button-3">3.</div>
              <div className="project-button-4">4.</div></div>
            </Plx>

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
