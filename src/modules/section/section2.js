import starSvg from '../../assets/star.svg';

const section2 = () => {
  const div = document.createElement('div');
  div.classList.add('section-container');

  const h1 = document.createElement('h1');
  h1.innerText = 'Welcome to Sushi Place';
  div.appendChild(h1);

  const hr = document.createElement('hr');
  div.appendChild(hr);

  const mainParagraph = document.createElement('p');
  mainParagraph.classList.add('main-description');
  mainParagraph.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.`;
  div.appendChild(mainParagraph);

  const button = document.createElement('button');
  button.classList.add('main-button');
  button.innerText = 'Read more';
  div.appendChild(button);

  const h3 = document.createElement('h3');
  h3.classList.add('latest-heading');
  div.appendChild(h3);

  const ul = document.createElement('ul');
  ul.classList.add('review-list');

  const namesArr = ['Ozanan', 'Désirée', 'Beaumont'];
  const commentArr = [
    'Enjoyed your delicious food and the evening was everything we hoped it would be. Thank you so much.',
    'Excellent environment, friendly service, great menu choices and really decent food and at affordable prices.',
    'What a lovely restaurant, good food and service and atmosphere, definitely hope to go back. The roasties were YUMMY!!!',
  ];

  const liArr = [];

  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li');
    li.classList.add('review-item');
    li.innerHTML = `
        <h4 class="review-heading">${namesArr[i]}</h4>
              <p class="review-description">
                &#8220;${commentArr[i]}&#8221;
              </p>
              <div class="stars-container">
                <img class="star-svg" src="${starSvg}" alt="Star symbol" />
                <img class="star-svg" src="${starSvg}" alt="Star symbol" />
                <img class="star-svg" src="${starSvg}" alt="Star symbol" />
                <img class="star-svg" src="${starSvg}" alt="Star symbol" />
                <img class="star-svg" src="${starSvg}" alt="Star symbol" />
              </div>`;

    liArr.push(li);
  }

  ul.append(...liArr);
  div.appendChild(ul);

  const section = document.createElement('section');
  section.classList.add('section');
  section.appendChild(div);

  return section;
};

export default section2;