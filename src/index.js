import fullpage from 'fullpage.js/dist/fullpage.extensions.min';
import section1 from './sections/section1.js';
import section2 from './sections/section2.js';
import section3 from './sections/section3.js';
import section4 from './sections/section4.js';

const rootContainer = document.getElementById("fullpage");

rootContainer.append(
  section1(),
  section2(),
  section3(),
  section4()
);

let fullPageInstance = new fullpage('#fullpage', {
  autoScrolling: true,
  // navigationTooltips: ['Hello', 'page2', 'page3'],
  navigation: true
});


