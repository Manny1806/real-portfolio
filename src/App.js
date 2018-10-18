import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bio.css';
import './skills.css';
import './projects.css';
import './connect.css';
import { render } from "react-dom";
import Plx from "react-plx";
import animateScrollTo from 'animated-scroll-to';


const projectArray = [
  ["karpul1.jpg","karpul2.jpg","siouxCityMusic.jpg","siouxCityMusic.jpg"],
  ["siouxCityMusic.jpg","siouxCityMusic.jpg","siouxCityMusic.jpg","siouxCityMusic.jpg"],
  ["siouxCityMusic.jpg","siouxCityMusic.jpg","siouxCityMusic.jpg","siouxCityMusic.jpg"],
  ["siouxCityMusic.jpg","siouxCityMusic.jpg","siouxCityMusic.jpg","siouxCityMusic.jpg"]
]

const options = {
  // duration of the scroll per 1000px, default 500
  speed: 1200,

  // minimum duration of the scroll
  minDuration: 250,

  // maximum duration of the scroll
  maxDuration: 4000,

  // DOM element to scroll, default window
  // Pass a reference to a DOM object
  // Example: document.querySelector('#element-to-scroll'),
  element: window,

  // Additional offset value that gets added to the desiredOffset.  This is
  // useful when passing a DOM object as the desiredOffset and wanting to adjust
  // for an fixed nav or to add some padding.
  offset: 0,

  // should animated scroll be canceled on user scroll/keypress
  // if set to "false" user input will be disabled until animated scroll is complete
  // (when set to false, "passive" will be also set to "false" to prevent Chrome errors)
  cancelOnUserAction: true,

  // Set passive event Listeners to be true by default. Stops Chrome from complaining.
  passive: true,

  // Scroll horizontally rather than vertically (which is the default)
  horizontal: false,

};


{/*
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

*/}

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
      },
      {
        startValue: "#000000",
        endValue: "#7c7c7c",
        property: "backgroundColor",
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
      },
      {
        startValue: "#7c7c7c",
        endValue: "#ffffff",
        property: "backgroundColor",
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
      },
      {
        startValue: "#ffffff",
        endValue: "#7c7c7c",
        property: "backgroundColor",
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
      },
      {
        startValue: "#7c7c7c",
        endValue: "#000000",
        property: "backgroundColor",
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
    start: '0%',
    end: '2%',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacity",
      },
      
    ]
  },
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
      {
        startValue: 1,
        endValue: 1,
        property: "opacity",
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
  {
    start: '8%',
    end: '74%',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacity",
      },
      
    ]
  },
  {
    start: '74%',
    end: '82%',
    properties: [
      {
        startValue: 60,
        endValue: 150,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: -120,
        endValue: -120,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: 1,
        endValue: 1,
        property: "opacityFilter",
        unit: '%'
      },
      {
        startValue: 1,
        endValue: 1,
        property: "opacity",
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
  {
    start: '12%',
    end: '74%',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacity",
      },
      
    ]
  },
  {
    start: '74%',
    end: '78%',
    properties: [
      {
        startValue: 1,
        endValue: 1,
        property: "opacity",
      },
      {
        startValue: 60,
        endValue: 105,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: -120,
        endValue: -120,
        property: "translateY",
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
  {
    start: '78%',
    end: '82%',
    properties: [
      {
        startValue: 1,
        endValue: 1,
        property: "opacity",
      },
      {
        startValue: 0,
        endValue: 0,
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
  {
    start: '74%',
    end: '78%',
    properties: [
      {
        startValue: 60,
        endValue: 105,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: -120,
        endValue: -120,
        property: "translateY",
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
  {
    start: '78%',
    end: '82%',
    properties: [
      
      {
        startValue: 0,
        endValue: 0,
        property: "opacityFilter",
        unit: '%'
      }
    ]
  },
  

];

const bioTitleData = [
  {
    start: '0',
    end: '3%',
    properties: [
      {
        startValue: 0,
        endValue: -350,
        property: "translateY",
        unit: '%'
      },
      // {
      //   startValue: "#ffffff",
      //   endValue: "#000000",
      //   property: "color",
      // }
    ]
  },
  {
    start: '80%',
    end: '83%',
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
        unit: '%'
      },
      // {
      //   startValue: "#000000",
      //   endValue: "#ffffff",
      //   property: "color",
      // }
    ]
  },
];

const skillsTitleData = [
  {
    start: '0%',
    end: '1%',
    properties: [
      {
        startValue: 550,
        endValue: 550,
        property: "translateY",
        unit: '%'
      },
      // {
      //   startValue: '#000000',
      //   endValue: '#ffffff',
      //   property: "color",
      // }
    ]
  },
  {
    start: '17%',
    end: '20%',
    properties: [
      {
        startValue: 550,
        endValue: 0,
        property: "translateY",
        unit: '%'
      },
      // {
      //   startValue: '#000000',
      //   endValue: '#ffffff',
      //   property: "color",
      // }
    ]
  },
  {
    start: '21%',
    end: '24%',
    properties: [
      {
        startValue: 0,
        endValue: -400,
        property: "translateX",
        unit: '%'
      },
      // {
      //   startValue: '#ffffff',
      //   endValue: '#000000',
      //   property: "color",
      // }
    ]
  },
];

const connectTitleData = [
  {
    start: '59%',
    end: '62%',
    properties: [
      {
        startValue: 0,
        endValue: 470,
        property: "translateY",
        unit: '%'
      }
    ]
  },
  {
    start: '63%',
    end: '66%',
    properties: [
      {
        startValue: 0,
        endValue: 550,
        property: "translateX",
        unit: '%'
      }
    ]
  },
];

const connectBoxData = [
  
  {
    start: '0%',
    end: '1%',
    properties: [
      {
        startValue: -120,
        endValue: -120,
        property: "translateY",
        unit: '%'
      },
      
      
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue:-120,
        endValue: 0,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      }
    ]
  },
  {
    start: '63%',
    end: '78%',
    properties: [
      {
        startValue: 0,
        endValue: 120,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  },
]

const connectImgData = [
  
  {
    start: '0%',
    end: '1%',
    properties: [
      {
        startValue: -100,
        endValue: -100,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 0,
        property: "opacity",
      }
      
    ]
  },
  {
    start: '42%',
    end: '62%',
    properties: [
      {
        startValue: -70,
        endValue: 0,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      }
    ]
  },
  {
    start: '63%',
    end: '78%',
    properties: [
      {
        startValue: 0,
        endValue: 120,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  },
]

const coffee1Data = [
  
  {
    start: '7.5%',
    end: '20.5%',
    properties: [
      {
        startValue: 0,
        endValue: 400,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: -20,
        property: "translateY",
        unit: '%'
      },      
    ]
  },
]

const coffee2Data = [
  
  {
    start: '11%',
    end: '17%',
    properties: [
      {
        startValue: 0,
        endValue: 500,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: -30,
        property: "translateY",
        unit: '%'
      },
      
    ]
  },
]

const coffee3Data = [
  
  {
    start: '5%',
    end: '18%',
    properties: [
      {
        startValue: 0,
        endValue: -205,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: -50,
        property: "translateY",
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
        endValue: 240,
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
      {
        startValue: "#ffffff",
        endValue: "#7c7c7c",
        property: "color",
      }
      
    ]
  },
  {
    start: '21%',
    end: '22%',
    properties: [
      {
        startValue: -92,
        endValue: -92,
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
    start: '74%',
    end: '83%',
    properties: [
      {
        startValue: -92,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: "#7c7c7c",
        endValue: "#ffffff",
        property: "color",
      }
      
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
      {
        startValue: "#000000",
        endValue: "#ffffff",
        property: "color",
      }
      
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
      },
      {
        startValue: "#ffffff",
        endValue: "#bebebe",
        property: "color",
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
      },
      {
        startValue: "#000000",
        endValue: "#ffffff",
        property: "color",
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
      },
      {
        startValue: "#ffffff",
        endValue: "#bebebe",
        property: "color",
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
    start: '0%',
    end: '1%',
    properties: [
      {
        startValue: 540,
        endValue: 540,
        property: "translateX",
        unit: '%'
      },
    ]
  },
  {
    start: '38%',
    end: '41%',
    properties: [
      {
        startValue: 300,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      // {
      //   startValue: '#ffffff',
      //   endValue: '#000000',
      //   property: "color",
      // }
      
    ]
  },
  {
    start: '42%',
    end: '45%',
    properties: [
      {
        startValue: 0,
        endValue: 450,
        property: "translateY",
        unit: '%'
      },
      // {
      //   startValue: '#000000',
      //   endValue: '#ffffff',
      //   property: "color",
      // }
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
    easing: "easeInOut",
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
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
      },
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      }
    ]
  },
]

const bioBoxNameData = [
  {
    start: '0%',
    end: '20%',
    properties: [
      {
        startValue: "#ffffff",
        endValue: "#000000",
        property: "borderColor",
      },
      {
        startValue: "#000000",
        endValue: "#7c7c7c",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '21%',
    end: '41%',
    properties: [
      // {
      //   startValue: "#ffffff",
      //   endValue: "#000000",
      //   property: "borderColor",
      // },
      {
        startValue: "#7c7c7c",
        endValue: "#ffffff",
        property: "backgroundColor",
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
      },
      {
        startValue: "#ffffff",
        endValue: "#7c7c7c",
        property: "backgroundColor",
      }
    ]
  },
  {
    start: '63%',
    end: '83%',
    properties: [
      // {
      //   startValue: "#000000",
      //   endValue: "#ffffff",
      //   property: "borderColor",
      // },
      {
        startValue: "#7c7c7c",
        endValue: "#000000",
        property: "backgroundColor",
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
      },
      {
        startValue: "#ffffff",
        endValue: "#7c7c7c",
        property: "color",
      }
    ]
  },
  {
    start: '73%',
    end: '83%',
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: "translateX",
        unit: '%'
      },
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
        unit: '%'
      },
      {
        startValue: "#7c7c7c",
        endValue: "#ffffff",
        property: "color",
      }
    ]
  },
]

const bioBoxContentMobileData = [
  {
    start: '0%',
    end: '12%',
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
      
    ]
  },
  {
    start: '73%',
    end: '83%',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ]
  },
]

const connectBoxContentMobileData = [
  {
    start: '0%',
    end: '18%',
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacity",
      },
      
    ]
  },
  {
    start: '54%',
    end: '62%',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ]
  },
  {
    start: '63%',
    end: '75%',
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: "opacity",
      },
    ]
  },
]

const cloudOneData = [
    {
      start: '0%',
      end: '21%',
      properties: [
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
      ]
    },
    {
      start: '21%',
      end: '33%',
      properties: [
        {
          startValue: 1,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -120,
          property: "translateX",
          unit: '%'
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 1,
          endValue: 1.5,
          property: "scale",
          unit: '%'
        }
        
      ]
    },
    {
      start: '33%',
      end: '100%',
      properties: [
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
      ]
    },
  ]

  const cloudTwoData = [
    {
      start: '21%',
      end: '33%',
      properties: [
        
        {
          startValue: 0,
          endValue: -120,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -40,
          property: "translateY",
          unit:"%"
        }
        
      ]
    },
  ]

  const cloudThreeData = [
    {
      start: '25%',
      end: '40%',
      properties: [
        
        {
          startValue: 0,
          endValue: -300,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: 10,
          endValue: -30,
          property: "translateY",
          unit: "%"
        },
        {
          startValue: 0.5,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 1,
          endValue: 2.5,
          property: "scale",
          unit: '%'
        }
      ]
    },
  ]

  const cloudFourData = [
    {
      start: '25%',
      end: '40%',
      properties: [
        
        {
          startValue: 0,
          endValue: -300,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: 10,
          endValue: -30,
          property: "translateY",
          unit: "%"
        },
        {
          startValue: 0.5,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 1,
          endValue: 3,
          property: "scale",
          unit: '%'
        }
      ]
    },
  ]

  const code1Data = [
    {
      start: '20%',
      end: '40%',
      properties: [
        
        {
          startValue: 0,
          endValue: -300,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: '#ffffff',
          endValue: '#7c7c7c',
          property: "color",
        },
      ]
    },
  ]

  const code2Data = [
    {
      start: '20%',
      end: '40%',
      properties: [
        
        {
          startValue: 0,
          endValue: -300,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: 0.8,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
  ]

  const code3Data = [
    {
      start: '25%',
      end: '40%',
      properties: [
        
        {
          startValue: 0,
          endValue: -100,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: 0.9,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
  ]

  const emailOneData = [
    {
      start: '0%',
      end: '1%',
      properties: [
        
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
    {
      start: '43%',
      end: '49%',
      properties: [
        
        {
          startValue: 1,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -230,
          property: "translateX",
          unit: "%"
        },
      ]
    },
  ]

  const emailTwoData = [
    {
      start: '0%',
      end: '1%',
      properties: [
        
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
    {
      start: '47%',
      end: '51%',
      properties: [
        
        {
          startValue: 1,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: 340,
          property: "translateX",
          unit: "%"
        },
      ]
    },
  ]

  const emailThreeData = [
    {
      start: '0%',
      end: '1%',
      properties: [
        
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
    {
      start: '50%',
      end: '53%',
      properties: [
        
        {
          startValue: 1,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -360,
          property: "translateX",
          unit: "%"
        },
      ]
    },
  ]

  const emailFourData = [
    {
      start: '0%',
      end: '1%',
      properties: [
        
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
    {
      start: '50%',
      end: '54%',
      properties: [
        
        {
          startValue: 1,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: 240,
          property: "translateX",
          unit: "%"
        },
      ]
    },
  ]

  const cheersData = [
    {
      start: '0%',
      end: '1%',
      properties: [
        
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
    {
      start: '52%',
      end: '60%',
      properties: [
        
        {
          startValue: 1,
          endValue: 1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: 120,
          property: "translateX",
          unit: "%"
        },
      ]
    },
  ]

  const sleepOneData = [
    {
      start: '0%',
      end: '1%',
      properties: [
        
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
    {
      start: '62%',
      end: '74%',
      properties: [
        
        {
          startValue: 1,
          endValue: 0.1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -330,
          property: "translateY",
          unit: "%"
        },
        {
          startValue: 0,
          endValue: -50,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: 0,
          endValue: 30,
          property: "skewX",
        },
        {
          startValue: 0.3,
          endValue: 1.2,
          property: "scale",
          unit: "%"

        },
      ]
    },
  ]

  const sleepTwoData = [
    {
      start: '0%',
      end: '1%',
      properties: [
        
        {
          startValue: 0,
          endValue: 0,
          property: "opacity",
        },
        
        
      ]
    },
    {
      start: '64%',
      end: '78%',
      properties: [
        
        {
          startValue: 1,
          endValue: 0.1,
          property: "opacity",
        },
        {
          startValue: 0,
          endValue: -370,
          property: "translateY",
          unit: "%"
        },
        {
          startValue: 0,
          endValue: 50,
          property: "translateX",
          unit: "%"
        },
        {
          startValue: 0,
          endValue: -40,
          property: "skewX",
        },
        {
          startValue: 0.1,
          endValue: 1.4,
          property: "scale",
          unit: "%"

        },
      ]
    },
  ]

let triggered = true;
let lastScrollTop = 0;

const code2 = 'var y = {start:"0%", end:"21%", translateY:"40%"};'
const code3 = 'onClick={() => this.handleClick(i)}'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentProject: 0,
      currentProjectSlide:0,
      desiredOffset: 3100,
      projectClickTrigger: false,
      projectClickClass: "click-projects",
      projectClickSpanClass: "click-projects-span"
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  handleScroll(e){
   
    if (document.body.scrollTop > 12700 || document.documentElement.scrollTop > 12700) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
    }

    if (!this.state.projectClickTrigger && (document.body.scrollTop > 6000 || document.documentElement.scrollTop > 6000)) {
      this.setState({
        projectClickTrigger: true,
        projectClickClass: "click-projects-triggered",
        projectClickSpanClass: "click-projects-span-triggered"
      })
    }

    if ((document.body.scrollTop >= 0 && document.body.scrollTop < 3100) || (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 3100)) {
      this.setState({
        desiredOffset: 3100
      })
    }
    
    if ((document.body.scrollTop >= 3100 && document.body.scrollTop < 6300) || (document.documentElement.scrollTop >= 3100 && document.documentElement.scrollTop < 6300)) {
      this.setState({
        desiredOffset: 6300
      })
    } else if ((document.body.scrollTop >= 6300 && document.body.scrollTop < 9480) || (document.documentElement.scrollTop >= 6300 && document.documentElement.scrollTop < 9480)) {
      this.setState({
        desiredOffset: 9480
      })
    } else if ((document.body.scrollTop >= 9480 && document.body.scrollTop < 12700) || (document.documentElement.scrollTop >= 9480 && document.documentElement.scrollTop < 12700)) {
      this.setState({
        desiredOffset: 12701
      })
    }
      
    
  }

  incPojectSlide() {
    if (this.state.currentProjectSlide === 3){
      this.setState({
        currentProjectSlide:0
      })
    } else {
      this.setState({
        currentProjectSlide: this.state.currentProjectSlide + 1
      })
    }
  }

  decPojectSlide() {
    if (this.state.currentProjectSlide === 0){
      this.setState({
        currentProjectSlide:3
      })
    } else {
      this.setState({
        currentProjectSlide: this.state.currentProjectSlide - 1
      })
    }
  }

  getCurrentProjectClass(x){
    if (this.state.currentProject === x){
      return "project-button-1"
    } 
    else {
      return "project-button-2"
    }
  }

  getCurrentProjectUrl() {
    if (this.state.currentProject === 0){
      if(this.state.currentProjectSlide === 0){
        return "karpul1.jpg"
      }
      else if(this.state.currentProjectSlide === 1){
        return "karpul2.jpg"
      }
      else if (this.state.currentProjectSlide === 2){
        return "karpul3.jpg"
      }
      else if (this.state.currentProjectSlide === 3){
        return "karpul4.jpg"
      }
    }
    else if(this.state.currentProject === 1){
      if(this.state.currentProjectSlide === 0){
        return "siouxCityMusic1.png"
      }
      else if(this.state.currentProjectSlide === 1){
        return "siouxCityMusic2.png"
      }
      else if (this.state.currentProjectSlide === 2){
        return "siouxCityMusic3.png"
      }
      else if (this.state.currentProjectSlide === 3){
        return "siouxCityMusic4.png"
      }
    }
    else if (this.state.currentProject === 2){
      if(this.state.currentProjectSlide === 0){
        return "pokemon1.png"
      }
      else if(this.state.currentProjectSlide === 1){
        return "pokemon2.png"
      }
      else if (this.state.currentProjectSlide === 2){
        return "pokemon3.png"
      }
      else if (this.state.currentProjectSlide === 3){
        return "pokemon4.png"
      }
    }
    else if (this.state.currentProject === 3){
      if(this.state.currentProjectSlide === 0){
        return "karpul1.jpg"
      }
      else if(this.state.currentProjectSlide === 1){
        return "karpul1.jpg"
      }
      else if (this.state.currentProjectSlide === 2){
        return "karpul1.jpg"
      }
      else if (this.state.currentProjectSlide === 3){
        return "karpul1.jpg"
      }
    }
  }

  getCurrentProjectText(){
    if (this.state.currentProject === 0){
      if(this.state.currentProjectSlide === 0){
        return (<div className="projects-content-text projects-content-text-first"><h2>Karpul is an app that allows users to find and create carpools.</h2>
        <ul>
          <li>Customize carpools by time and days of the week</li>
          <li>Search for nearby carpools by destination address</li>
          <li>Upload custom profile picture</li>
          <li>Customize carpools by time and days of the week</li>
          <li>Request to join carpools or accept new members to your own.</li>
        </ul>
        </div>)
      }
      else if(this.state.currentProjectSlide === 1){
        return (<div className="projects-content-text projects-content-text-tools"><h2>Libraries and Tools:</h2>
        <ul>
          <li>Node.js, Express.js</li>
          <li>React.js, Redux.js</li>
          <li>bcrypt.js, passport.js, JWT Auth</li>
          <li>mongoose, MongoDB</li>
          <li>Heroku for server</li>
          <li>Surge for client</li>
        </ul>
        </div>)
      }
      else if (this.state.currentProjectSlide === 2){
        return (<div className="projects-content-text projects-content-text-api"><h2>APIs:</h2>
        <ul>
          <li>Mapbox - mapping coordinates and location pin rendering</li>
          <li>Here - takes location address and converts to latitude and longitude</li>
          <li>Algolia  - implements auto complete for address input</li>
          <li>Cloudinary - image uploading and hosting</li>
        </ul>
        </div>)
      }
      else if (this.state.currentProjectSlide === 3){
        return (<div className="projects-content-text projects-content-text-last"><h2>Try it out!</h2>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="http://karpul-client.surge.sh/">Karpul Live App</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/client-karpul">Client GitHub Repo</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/Karpul_server">Server GitHub Repo</a></li>
        </ul>
        </div>)
      }
    }
    else if(this.state.currentProject === 1){
      if(this.state.currentProjectSlide === 0){
        return (<div className="projects-content-text projects-content-text-first"><h2>Sioux City Music allows local bands to create posts and events that are easily accessible to fans.</h2>
        <ul>
          <li>Create posts and events with linkable media</li>
          <li>Delete and edit existing posts and events</li>
          <li>Register new bands and new band members</li>
          <li>Intuitive and responsive mobile design</li>
        </ul>
        </div>)
      }
      else if(this.state.currentProjectSlide === 1){
        return (<div className="projects-content-text projects-content-text-tools"><h2>Libraries and Tools:</h2>
        <ul>
          <li>Node.js, Express.js</li>
          <li>React.js, Redux.js</li>
          <li>bcrypt.js, passport.js, JWT Auth</li>
          <li>mongoose, MongoDB</li>
          <li>Heroku for client and server</li>
        </ul>
        </div>)
      }
      else if (this.state.currentProjectSlide === 2){
        return (<div className="projects-content-text projects-content-text-future"><h2>Future development plans:</h2>
        <ul>
          <li>Allow users to create locations with individual web pages</li>
          <li>Show and filter all bands posts and events on home page</li>
          <li>Connect page to band Facebook and Google Image accounts</li>
          <li>Top nav bar functionality on band pages</li>
          <li>Multiple Cities!!</li>
        </ul>
        </div>)
      }
      else if (this.state.currentProjectSlide === 3){
        return (<div className="projects-content-text projects-content-text-last"><h2>Try it out!</h2>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://sioux-city-music.herokuapp.com/">Sioux City Music Live App</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/Alex-BandApp-Client">Client GitHub Repo</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/Alex-BandApp-Server">Server GitHub Repo</a></li>
        </ul>
        </div>)
      }
    }
    else if (this.state.currentProject === 2){
      if(this.state.currentProjectSlide === 0){
        return (<div className="projects-content-text projects-content-text-first"><h2> Pokémon Quiz is designed for users to learn the names of a few creatures from the popular video game series Pokémon.</h2>
        <ul>
          <li>Test the user's knowledge of gen 1 Pokemon</li>
          <li>Keeps track of user's performace</li>
          <li>Questions determined using spaced repetition algorithm</li>
          <li>Intuitive and responsive mobile design</li>
        </ul>
        </div>)
      }
      else if(this.state.currentProjectSlide === 1){
        return (<div className="projects-content-text projects-content-text-tools"><h2>Libraries and Tools:</h2>
        <ul>
          <li>Node.js, Express.js</li>
          <li>React.js, Redux.js</li>
          <li>bcrypt.js, passport.js, JWT Auth</li>
          <li>mongoose, MongoDB</li>
          <li>Heroku for client and server</li>
        </ul>
        </div>)
      }
      else if (this.state.currentProjectSlide === 2){
        return (<div className="projects-content-text projects-content-text-future"><h2>Future development plans:</h2>
        <ul>
          <li>Add an additional page to review select Pokémons</li>
          <li>Add a Hint system to jog user's memory</li>
          <li>Add a Skip button to let user further shuffle the list</li>
          <li>Add an easter egg character to the end of the array for a surprise</li>
        </ul>
        </div>)
      }
      else if (this.state.currentProjectSlide === 3){
        return (<div className="projects-content-text projects-content-text-last"><h2>Try it out!</h2>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://pokemon-learning-center-client.herokuapp.com/">Pokemon Quiz Live App</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-client">Client GitHub Repo</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-server">Server GitHub Repo</a></li>
        </ul>
        </div>)
      }
    }
    else if (this.state.currentProject === 3){
      if(this.state.currentProjectSlide === 0){
        return (<div className="pythonImgContainer"><img className="pythonImg" src="python1.png"/>
          <section className="pythonText">
          <h2>Desktop Invasion!</h2>
          <ul>
            <li>Space Invaders type game written in python</li>
            <li>Protect your Windows 95 taskbar from old desktop shortcuts!</li>
          </ul>
          </section>
        </div>)
      }
      else if(this.state.currentProjectSlide === 1){
        return <div className="pythonImgContainer"><img className="pythonImg" src="python2.png"/>
        <section className="pythonText">
        <h2>Tools and Libraries:</h2>
        <ul>
          <li>python3</li>
          <li>pygame</li>
        </ul>
        </section>
      </div>
      }
      else if (this.state.currentProjectSlide === 2){
        return <div className="pythonImgContainer"><img className="pythonImg" src="python3.png"/>
        <section className="pythonText">
        <h2>Try it out!</h2>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/Desktop-Invasion-Alex">GitHub Repo</a></li>
        </ul>
        </section>
      </div>
      }
      else if (this.state.currentProjectSlide === 3){
        return <div className="pythonImgContainer"><img className="pythonImg" src="python4.png"/>
        <section className="pythonText">
        <h2>One last thing...</h2>
        <ul>
          <li>Watch out for Clippy!!</li>
        </ul>
        </section>
      </div>
      }
    }
  }

  
  
  render() {
    return (
      <div className="App"  id='app'>
        <Plx className="real-background" parallaxData={colorChangeOnlyData}/>
        <div className="fixed-background-base" >
          {/* <Plx className='fixed-back-base-halfway-line'></Plx> */}
          {/* <Plx className="first-background-top" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-bottom" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-left" parallaxData={colorChangeOnlyData}></Plx>
          <Plx className="first-background-right" parallaxData={colorChangeOnlyData}></Plx> */}
          <div className="fixed-background-second" >

            {/* <Plx className="mobile-bottom-column"parallaxData={colorChangeOnlyData}/>

            <Plx className="left-column" parallaxData={colorChangeOnlyData}/> */}
            <Plx className="moving-square" parallaxData={movingSqrData} >
              <section className="scroll-or-click"><span className="scroll-or-click-first">SCROLL</span><span className="scroll-or-click-second">or</span><span className="scroll-or-click-third">&#8592;CLICK</span></section>
              <Plx className="bio-title" parallaxData={bioTitleData} onClick={()=>{
                  document.documentElement.scrollTop = 0;
                  animateScrollTo((document.documentElement.scrollHeight*0.2), options)
                }}>bio</ Plx>
              <Plx className="skills-title" parallaxData={skillsTitleData} onClick={()=>animateScrollTo((document.documentElement.scrollHeight*0.4), options)}>skills</ Plx>
              <Plx className="projects-title" parallaxData={projectsTitleData} onClick={()=>animateScrollTo((document.documentElement.scrollHeight*0.6), options)}>projects</ Plx>
              <Plx className="connect-title"parallaxData={connectTitleData} onClick={()=>animateScrollTo((document.documentElement.scrollHeight*0.8), options)}>connect</ Plx>

              <Plx className="coffee-2" parallaxData={coffee2Data}><img src="img/Coffee.gif"/></ Plx>
              <Plx className="coffee-1" parallaxData={coffee1Data}><img src="img/Coffee.gif"/></ Plx>
              <Plx className="coffee-4" parallaxData={coffee4Data}><img src="img/Coffee.gif"/></ Plx>
              <Plx className="coffee-3" parallaxData={coffee3Data}><img src="img/Coffee.gif"/></ Plx>

            </Plx>
            {/* <Plx className="left-moving-square-top" parallaxData={leftSqrTopData} />
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
            <Plx className="second-background-inner-box-right" parallaxData={colorChangeOnlyData}></Plx> */}
            
            {/* <Plx className="light-bulb" parallaxData={bulbData}><img src="idea.png"/></ Plx>
            <Plx className="light-bulb-on" parallaxData={bulbOnData}><img src="ideaOn.png"/></ Plx>
            <Plx className="light-bulb-on-light" parallaxData={bulbOnLightData}><img src="ideaOnLight.png"/></ Plx> */}
            
            

            
            <Plx className="bio-box" parallaxData={bioBoxNameData}>
              <Plx className="bio-name" parallaxData={bioNameData}>ALEX WIDNER</Plx>
              <Plx className="skills-image" parallaxData={skillsNameData}>FULL STACK</Plx>
              <Plx className="projects-box" parallaxData={projectsBoxData}>
              <div className={this.state.projectClickClass}>
                <span className={this.state.projectClickSpanClass}>&#8678;</span>
                <span className={this.state.projectClickSpanClass}>click</span>
                <span className={this.state.projectClickSpanClass}>&#8678;</span>
              </div>
              <div><div className={this.getCurrentProjectClass(0)} onClick={()=>{this.setState({currentProject: 0, currentProjectSlide: 0})}}>1.</div>
              <div className={this.getCurrentProjectClass(1)} onClick={()=>{this.setState({currentProject: 1, currentProjectSlide: 0})}}>2.</div></div>
              <div><div className={this.getCurrentProjectClass(2)} onClick={()=>{this.setState({currentProject: 2, currentProjectSlide: 0})}}>3.</div>
              <div className={this.getCurrentProjectClass(3)} onClick={()=>{this.setState({currentProject: 3, currentProjectSlide: 0})}}>4.</div></div>
            </Plx>
            </Plx>
            {/* <Plx className="bio-content" parallaxData={bioBoxContentData}>I am a full stack developer.<br/><br/>
            More importantly though I am a problem solving fanatic with a relentless devotion to efficiency.<br/><br/>
            I bring an 'above and beyond' approach to my work because I believe my goals should not be limited by familiarity or job descriptions.</Plx>

            <Plx className="bio-content-mobile" parallaxData={bioBoxContentMobileData} >I am a full stack developer.<br/><br/>
            More importantly though I am a problem solving fanatic with a relentless devotion to efficiency.<br/><br/>
            I bring an 'above and beyond' approach to my work because I believe my goals should not be limited by familiarity or job descriptions.</Plx> */}

            
            {/* <Plx className="skills-content" parallaxData={skillsBoxContentData}><span style={{fontWeight: "bold"}}>Front End Skills:</span> HTML, CSS, JavaScript, React, React-plx, Redux, JQuery<br/><br/>
            <span style={{fontWeight: "bold"}}>Back End Skills:</span> Node.js, Express, MongoDB, Mocha, Chai, SQL<br/><br/>
            <span style={{fontWeight: "bold"}}>Soft Skills:</span> Quick Learner, Adaptive, Strong communication, Organized, Dependable, Team Oriented</Plx> */}

            {/* <Plx className="skills-content-mobile" parallaxData={skillsBoxContentData}><span style={{fontWeight: "bold"}}>Front End Skills:</span> HTML, CSS, JavaScript, React, React-plx, Redux, JQuery<br/><br/>
            <span style={{fontWeight: "bold"}}>Back End Skills:</span> Node.js, Express, MongoDB, Mocha, Chai, SQL<br/><br/>
            <span style={{fontWeight: "bold"}}>Soft Skills:</span> Quick Learner, Adaptive, Strong communication, Organized, Dependable, Team Oriented</Plx> */}

            <Plx className="content-box"  parallaxData={bioBoxNameData}></Plx>
            {/* <Plx className="content-box-mobile-border"  parallaxData={bioBoxNameData}></Plx>
            <Plx className="content-box-mobile"  parallaxData={backgroundData}></Plx> */}
            

            
            {/* <Plx className="projects-content" parallaxData={projectsBoxData}>
              <section className="projects-slide-forward" onClick={()=>{this.incPojectSlide()}} >{'>'}</section>
              <section className="projects-slide-back" onClick={()=>{this.decPojectSlide()} } >{'<'}</section>
              <img src={this.getCurrentProjectUrl()}/>
              <div className="projects-content-text-container">{this.getCurrentProjectText()}</div>
            </ Plx> */}

            {/* <Plx className="projects-content-mobile" parallaxData={projectsBoxData}>
              <section className="projects-slide-forward" onClick={()=>{this.incPojectSlide()}} >{'>'}</section>
              <section className="projects-slide-back" onClick={()=>{this.decPojectSlide()} } >{'<'}</section>
              <img src={this.getCurrentProjectUrl()}/>
              <div className="projects-content-text-container">{this.getCurrentProjectText()}</div>
            </ Plx> */}

            {/* <Plx className="connect-content" parallaxData={connectBoxData}>
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/10rF3b-d7UjQQLPgVArpBie4XkxBeHwLq/view"><img className="connect-icons" src="http://petrgazarov.com/style/images/resume-icon.png"/> resume</a><br/><br/>
              <a target="_blank" rel="noopener noreferrer" href="mailto:alex.dean.widner@gmail.com"><img className="connect-icons" src="https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-icon.ico"/> alex.dean.widner@gmail.com</a><br/><br/>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-widner/"><img className="connect-icons" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"/> www.linkedin.com/in/alex-widner</a><br/><br/>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Manny1806"><img className="connect-icons" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"/> www.github.com/Manny1806</a><br/><br/>
            </Plx>

            <Plx className="connect-content-mobile" parallaxData={connectBoxContentMobileData}>
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/10rF3b-d7UjQQLPgVArpBie4XkxBeHwLq/view"><img className="connect-icons" src="http://petrgazarov.com/style/images/resume-icon.png"/> resume</a><br/><br/>
              <a target="_blank" rel="noopener noreferrer" href="mailto:alex.dean.widner@gmail.com"><img className="connect-icons" src="https://pinkeyegraphics.co.uk/wp-content/uploads/gmail-icon.ico"/> alex.dean.widner@gmail.com</a><br/><br/>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-widner/"><img className="connect-icons" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"/> www.linkedin.com/in/alex-widner</a><br/><br/>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Manny1806"><img className="connect-icons" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"/> www.github.com/Manny1806</a><br/><br/>
            </Plx> */}

            {/* <Plx className="connect-box-image" parallaxData={connectImgData}><span className="connect-box-image-span">-young me waiting for your email</span><img src="ME.jpg"/></Plx> */}

            
            {/* <Plx className="code-line-1" parallaxData={code1Data}>var x = false;</ Plx>
            <Plx className="code-line-2" parallaxData={code2Data}>{code2}</ Plx>
            <Plx className="code-line-3" parallaxData={code3Data}>{code3}</ Plx>

            <Plx className="cloud-1" parallaxData={cloudOneData}><img src="cloud-first.png"/></ Plx>
            <Plx className="cloud-2" parallaxData={cloudTwoData}><img src="cloud_second.png"/></ Plx>
            <Plx className="cloud-3" parallaxData={cloudThreeData}><img src="cloud_third.png"/></ Plx>
            <Plx className="cloud-4" parallaxData={cloudFourData}><img src="cloud-first.png"/></ Plx>

            <Plx className="email-1" parallaxData={emailOneData}><img src="email.png"/></ Plx>
            <Plx className="email-2" parallaxData={emailTwoData}><img src="email.png"/></ Plx>
            <Plx className="email-3" parallaxData={emailThreeData}><img src="email.png"/></ Plx>
            <Plx className="email-4" parallaxData={emailFourData}><img src="email.png"/></ Plx>

            <Plx className="cheers" parallaxData={cheersData}><img src="Cheers.gif"/></ Plx>

            <Plx className="sleep-1" parallaxData={sleepOneData}><img src="sleep.png"/></ Plx>
            <Plx className="sleep-2" parallaxData={sleepTwoData}><img src="sleep.png"/></ Plx> */}


          </div>
        </div>
      </div>
    );
  }
}

export default App;
