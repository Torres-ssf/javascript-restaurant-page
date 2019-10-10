import section1 from './sections/section1.js';
import section2 from './sections/section2.js';
import section3 from './sections/section3.js';

const rootContainer = document.getElementById("main");

// const allContainers = document.createElement("h1");
// allContainers.innerText = 'Hello There motherfocker'

rootContainer.append(
    section1(),
    section2(),
    section3()
    );

console.log(rootContainer);

