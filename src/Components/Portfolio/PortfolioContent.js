import React from 'react';
import { Link } from 'react-router-dom';

import headshot from './img/headshot_small.jpeg';
import hongKong from './img/hk-island-night.JPG';
import havana from './img/old-hav-green-car.JPG';

const projects = {
  'Warbler': {
    name: 'Warbler',
    imgSrc: headshot,
    skills: ['Python', 'Flask', 'Bcrypt', 'SQLAlchemy', 'Jinja', 'jQuery', 'WTForms'],
    desc: `a twitter clone!`,
    gitHub: 'https://github.com/japamat/warbler',
  },
  'Jobly': {
    name: 'Jobly',
    imgSrc: hongKong,
    skills: ['JavaScript', 'React.js',],
    desc: `This picture is of the Hong Kong Island skyline at night. Every night the buildings on the HK Island portion of Hong Kong put on a beautiful coordinated light show.`,
    gitHub: 'https://github.com/japamat/react-jobly/tree/master/jobly',
  },
  'DariaIpsum': {
    name: 'Daria Ipsum',
    imgSrc: havana,
    skills: ['JavaScript', 'React.js',],
    desc: `Here I am in Old Havana from a trip I took with a couple close friends of mine. Cars like that were often put together with parts from many different cars.`,
    gitHub: 'https://github.com/japamat/personal_site/tree/master/src/Components/IpsumGenerator',
  },
  'Terminal': {
    name: 'Terminal',
    imgSrc: havana,
    skills: ['JavaScript', 'React.js',],
    desc: `A fake bash temrinal built 100% in react. A pet project of mine. current functionality: cd, pwd, help, clear, & ls`,
    gitHub: 'https://github.com/japamat/personal_site/tree/master/src/Components/Terminal',
  },
};

const portfolioIntro = (
  <span>
    Here are some pictures you can look through to learn a little bit more about me, I'll try and keep it light and interesting as you click through. If you would like to get in touch, you can reach out to me on my <Link to="/contact">contact</Link> page
  </span>
)

export {
  projects,
  portfolioIntro,
};