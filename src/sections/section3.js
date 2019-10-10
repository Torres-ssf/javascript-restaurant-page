const section3 = () => {
  const header = document.createElement('header');

  const h1 = document.createElement('h1');
  h1.innerText = 'Our Menu';
  header.appendChild(h1);

  const select = document.createElement('select');
  select.setAttribute('id', 'dishname');

  const valueArr = [
    'Mixed Fish Sashimi',
    'Mixed Special Sashimi',
    'Mixed Nigiri',
    'Mixed Fish Nigiri',
    'Mixed Fish & Seafood Sashimi'
  ];

  const options = [];

  for (let i = 0; i < 5; i++) {
    const option = document.createElement('option');
    option.setAttribute('value', `${valueArr[i]}`);
    option.innerHTML = valueArr[i];
    options.push(option);
  }

  select.append(...options);
  header.appendChild(select);

  const mainParagraph = document.createElement('p');
  mainParagraph.classList.add('main-description');
  mainParagraph.innerText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            `;

  header.appendChild(mainParagraph);

  const ul = document.createElement('ul');
  ul.classList.add('dish-list');

  const dishNames = [
    'Mixed Fish Sashimi(24pcs)',
    'Mixed Special Sashimi(23pcs)',
    'Mixed Nigiri(14pcs)',
    'Mixed Fish Nigiri(8pcs)',
    'Mixed Fish & Seafood Sashimi(32pcs)'
  ];

  const pricesArr = [
    '$16',
    '$28',
    '$25',
    '$15',
    '$36'
  ];

  const liArr = [];

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.classList.add('dish-item');

    const div = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.innerText = dishNames[Math.ceil((i + 1) / 2) - 1];

    const p = document.createElement('p');
    p.innerText = `3 tuna, 3 salmon, 3 white tuna, 3 red snapper, 2 octopus, 2 surf
    claim, 2 scallops`;

    div.append(h4, p);

    const span = document.createElement('span');
    span.innerHTML = pricesArr[Math.ceil((i + 1) / 2) - 1];

    li.append(div, span);

    liArr.push(li);
  }

  ul.append(...liArr);

  console.log(ul);

  const section = document.createElement('section');
  section.classList.add('section');
  section.append(header, ul);

  return section;
}

export default section3;