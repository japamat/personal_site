import React from 'react';
import { Link } from 'react-router-dom';

import ipsum from './img/ipsum.png';
import hongKong from './img/hk-island-night.JPG';
import terminal from './img/terminal.png';
import gifsmos from './img/gifsmos.png';
import warbler from './img/warbler.png';

const projects = {
  'Warbler': {
    name: 'Warbler',
    imgSrc: warbler,
    skills: ['Python', 'Flask', 'Bcrypt', 'SQLAlchemy', 'Jinja', 'jQuery', 'WTForms'],
    features: ['login', 'tweet', 'comment', 'follwo users', 'like messages', 'edit profile'],
    desc: `a twitter clone! Built with Python on the backend and some simple jQuery on the front end.`,
    gitHub: 'https://github.com/japamat/warbler',
    hyperlink: 'https://japamat-warbler.herokuapp.com/',
  },
  'Jobly': {
    name: 'Jobly',
    imgSrc: hongKong,
    skills: ['JavaScript', 'React.js', 'Redux.js', 'Redux-saga', 'JWT', 'Express.js'],
    features: ['login', 'tweet', 'comment', 'follwo users', 'like messages', 'edit profile', 'password reset'],
    desc: `This picture is of the Hong Kong Island skyline at night. Every night the buildings on the HK Island portion of Hong Kong put on a beautiful coordinated light show.`,
    gitHub: 'https://github.com/japamat/react-jobly/tree/master/jobly',
    hyperlink: 'https://github.com/japamat/react-jobly/tree/master/jobly',
  },
  'DariaIpsum': {
    name: 'Daria Ipsum',
    imgSrc: ipsum,
    skills: ['JavaScript', 'React.js', 'Node.js', 'Express', 'Cheerio.js'],
    features: ['Generate new text', 'Copy to clipboard'],
    desc: `Text generated dynamically using Markov chains cerated from lines scraped from the web using Cheerio.js. Based on Daria, the classic MTV show from '97 - '02. Check out the github page to learn more about how it works.`,
    gitHub: 'https://github.com/japamat/personal_site/tree/master/src/Components/IpsumGenerator',
    hyperlink: '/ipsum',
  },
  'Terminal': {
    name: 'Terminal',
    imgSrc: terminal,
    skills: ['JavaScript', 'React.js',],
    features: ['Change Directory', 'Show current working directory', 'Help', 'List contents', 'List contents'],
    desc: `A fake bash temrinal built 100% in react. A pet project of mine. Current functionality: cd, pwd, help, clear, & ls. Best used with a keyboard.`,
    gitHub: 'https://github.com/japamat/personal_site/tree/master/src/Components/Terminal',
    hyperlink: '/io',
  },
  'gifsmos': {
    name: 'GIFsmos',
    imgSrc: gifsmos,
    skills: ['JavaScript', 'React.js', 'Redux.js', 'Redux Thunk'],
    features: ['Save Graph', 'Edit Graph', 'Import from Desmos', 'Capture GIF'],
    desc: `An open source project that allows users to make gifs out of graphs. My contributions include allowing users to save their work to their machine, improved user inputs that eliminate user error.`,
    gitHub: 'https://github.com/japamat/gifsmos',
    hyperlink: 'http://www.gifsmos.com/',
  },
};

const portfolioIntro = (
  <span>
    Here are some pictures you can look through to learn a little bit more about me, I'll try and keep it light and interesting as you click through. If you would like to get in touch, you can reach out to me on <a href="https://www.linkedin.com/in/jasonpmatthias/" rel="noopener noreferrer" target="_blank">Linkedin</a> page
  </span>
)

export {
  projects,
  portfolioIntro,
};