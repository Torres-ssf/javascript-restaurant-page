import section1 from './sections/section1.js';

const rootContainer = document.getElementById("main");

// const allContainers = document.createElement("h1");
// allContainers.innerText = 'Hello There motherfocker'

rootContainer.append(section1());

console.log(rootContainer);

