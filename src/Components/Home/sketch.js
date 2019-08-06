import { isMobile, screenDimensions } from '../../lib/uiHelpers';

export default function sketch (p) {
  // HELPER FUNCTIONS
  const getNewSkill = (prevSkill) => {
    const _picker = () => {
      return skills[Math.floor(Math.random() * skills.length)]
    }
    let newSkill = _picker();
    while (newSkill[1] === prevSkill) {
      newSkill = _picker();
    }
    return newSkill;
  }
  
  const getNewColor = () => {
    return Math.min((Math.floor(Math.random() * 255) + 50), 255)
  }
  
  const setColor = (firstColor = false) => {
    r = getNewColor(true);
    g = getNewColor(true);
    b = getNewColor(true);
  }
  
  const setSkill = (prevSkill) => {
    let newSkill = getNewSkill(prevSkill);
    topText = newSkill[0];
    bottomText = newSkill[1];
  }

  // GLOBAL VARIABLES
  const skills = [
    [`Jason loves...`, `React.js!`],
    [`Jason likes...`, `Redux.js`],
    [`Jason knows...`, `Flask`],
    [`Jason knows...`, `Express.js`],
    [`Jason likes...`, `Node.js`],
    [`Jason likes...`, `Bootstrap`],
    [`Jason likes...`, `CSS3`],
    [`Jason loves...`, `debugging!`],
    [`Jason knows...`, `PostgreSQL`],
  ];
  
  const IS_MOBILE = isMobile();
  const SCREEN = screenDimensions();
  
  let x = Math.floor(window.innerWidth / 2 - 130);
  let y = Math.floor(window.innerHeight / 3 - 37.5);
  
  let xVelocity = 0;
  let yVelocity = 0;
  
  let topText = `Hello world!`;
  let bottomText = `I'm Jason`;
  
  let r = getNewColor();
  let g = getNewColor();
  let b = getNewColor();

  let orientation = window.innerWidth > window.innerHeight
    ? true
    : false;

  // P5 FUNCTIONS
  p.setup = () => {
    if (IS_MOBILE) {
      if(orientation) {
        p.createCanvas(SCREEN.height, SCREEN.width - 60);
      } else {
        p.createCanvas(SCREEN.width, SCREEN.height - 60);
      }
    } else {
      p.createCanvas(window.innerWidth, window.innerHeight - 60);
    }
  };
  
  p.windowResized = () => {
    if (IS_MOBILE) {
      if ( orientation ) { // case, landscape to portrait
        p.resizeCanvas(SCREEN.width, SCREEN.height - 60);
      } else {
        p.resizeCanvas(SCREEN.height, SCREEN.width - 60);
      }
      orientation = !orientation;
    } else {
      p.resizeCanvas(window.innerWidth, window.innerHeight - 60);
    }
  }

  setTimeout(() => {
    xVelocity = IS_MOBILE ? 2 : 3;
    yVelocity = IS_MOBILE ? 2 : 3;
  }, 1250);

  p.draw = () => {
    p.background(0, 0, 0);
    p.fill(r, g, b);
    p.textSize(32);
    p.strokeWeight(0);
    p.text(topText, x + 5, y + 32);
    p.text(bottomText, x + 5, y + 64);
    p.noFill();
    p.stroke(p.color(r, g, b));
    p.strokeWeight(4);
    p.rect(x, y, 260, 75, 5);

    x = x + xVelocity;
    y = y + yVelocity;

    if (x + 260 >= window.innerWidth) {
      setSkill(bottomText)
      setColor()
      xVelocity = -xVelocity;
      x = window.innerWidth - 260;
    } else if (x <= 0) {
      setSkill(bottomText)
      setColor()
      xVelocity = -xVelocity;
      x = 0;
    }
    
    if (y + 135 >= window.innerHeight) {
      setSkill(bottomText)
      setColor()
      yVelocity = -yVelocity;
      y = window.innerHeight - 135;
    } else if (y <= 0) {
      setSkill(bottomText)
      setColor()
      yVelocity = -yVelocity;
      y = 0;
    }
  };
};
