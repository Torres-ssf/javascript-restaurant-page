import fullpage from 'fullpage.js/dist/fullpage.extensions.min';
import sections from './modules/sections';

const rootContainer = document.getElementById('fullpage');

rootContainer.append(
  sections.getSection1(),
  sections.getSection2(),
  sections.getSection3(),
  sections.getSection4(),
);

let fullPageInstance = new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
});