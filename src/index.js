import fullpage from 'fullpage.js/dist/fullpage.extensions.min'; // eslint-disable-line
import sections from './modules/sections';

const rootContainer = document.getElementById('fullpage');

rootContainer.append(
  sections.getSection1(),
  sections.getSection2(),
  sections.getSection3(),
  sections.getSection4() // eslint-disable-line
);

/* eslint-disable */
let fullPageInstance = new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
});