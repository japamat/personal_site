import React from 'react';
import { Link } from 'react-router-dom';

import headshot from './img/headshot_small.jpeg';
import hongKong from './img/hk-island-night.JPG';
import havana from './img/old-hav-green-car.JPG';

const AboutImgs = [
  {
    src: headshot,
    desc: `Hi there! 👋 It's me, Jason`
  },
  {
    src: hongKong,
    desc: `This picture is of the Hong Kong Island skyline at night. Every night the buildings on the HK Island portion of Hong Kong put on a beautiful coordinated light show.`
  },
  {
    src: havana,
    desc: `Here I am in Old Havana from a trip I took with a couple close friends of mine. Cars like that were often put together with parts from many different cars.`
  },
];

const AboutIntro = (
  <span>
    Here are some pictures you can look through to learn a little bit more about me, I'll try and keep it light and interesting as you click through. If you would like to get in touch, you can reach out to me on my <Link to="/contact">contact</Link> page
  </span>
)

export {
  AboutImgs,
  AboutIntro,
};