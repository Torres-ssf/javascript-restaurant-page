const section1 = () => {
  const header = document.createElement('header');

  const navbar = document.createElement('navbar');
  navbar.classList.add('navbar');

  const navContainer = document.createElement('div');
  navContainer.classList.add('nav-container');

  const navArray = ['Logo', 'Home', 'About', 'Menu', 'Contact'];
  const anchorArray = [];

  for (let i = 0; i < 5; i += 1) {
    const a = document.createElement('a');
    if(i !== 0) a.setAttribute('href', `#page${i}`)
    a.classList.add('nav-item');
    a.innerHTML = navArray[i];
    anchorArray.push(a);
  }

  navContainer.append(...anchorArray);

  navbar.appendChild(navContainer);

  header.appendChild(navbar);

  const container = document.createElement('div');
  container.classList.add('section-container');

  const h1 = document.createElement('h1');
  h1.innerText = 'Japonese Restaurant';

  container.appendChild(h1);

  const hr = document.createElement('hr');

  container.appendChild(hr);

  const mainParagraph = document.createElement('p');
  mainParagraph.classList.add('main-description');
  mainParagraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do '
    + 'eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim'
    + 'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'
    + 'aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit'
    + 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  container.appendChild(mainParagraph);

  const ul = document.createElement('ul');
  ul.classList.add('featured-list');

  const featuredDishes = ['Sashimi', 'Temaki', 'Salmon Carpaccio'];
  const liArray = [];

  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.classList.add('featured-item');

    li.innerHTML = `
    <div class="image-container">
    <img
      class="featured-image"
      src="../src/assets/featured-${i + 1}.jpg"
      alt="${featuredDishes[i]} image"
    />
  </div>
  <h4 class="feature-heading">${featuredDishes[i]}</h4>
  <p class="feature-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>`;
    liArray.push(li);
  }

  ul.append(...liArray);

  container.appendChild(ul);

  const section = document.createElement('section');
  section.classList.add('section');
  section.append(header, container);

  return section;
};

export default section1;