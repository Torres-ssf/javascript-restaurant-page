import sections from './modules/sections';
import './scss/main.scss';

const fullpage = require('fullpage.js');
const rootContainer = document.getElementById('fullpage');

rootContainer.append(
  sections.getSection1(),
  sections.getSection2(),
  sections.getSection3(),
  sections.getSection4(),
);

/* eslint-disable */
let fullPageInstance = new fullpage('#fullpage', {
  anchors:['page1', 'page2', 'page3', 'page4'],
  autoScrolling: true,
  navigation: true,
});