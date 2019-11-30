const section4 = () => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Contact Us';

  const form = document.createElement('form');

  const labelName = document.createElement('label');
  labelName.setAttribute('for', 'name');
  labelName.innerText = 'Name';

  const inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('placeholder', 'Name');

  const labelEmail = document.createElement('label');
  labelEmail.setAttribute('for', 'email');
  labelEmail.innerText = 'Email';

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('placeholder', 'Email');

  const labelPhone = document.createElement('label');
  labelPhone.setAttribute('for', 'tel');
  labelPhone.innerText = 'Phone';

  const inputPhone = document.createElement('input');
  inputPhone.setAttribute('type', 'text');
  inputPhone.setAttribute('placeholder', 'Phone');

  const button = document.createElement('button');
  button.classList.add('main-button');
  button.innerHTML = 'Submit';

  form.append(labelName, inputName, labelEmail, inputEmail, labelPhone, inputPhone, button);

  const footer = document.createElement('footer');

  const firstContainer = document.createElement('div');
  firstContainer.classList.add('first-con');

  const socialContainer = document.createElement('div');
  socialContainer.classList.add('social-container');

  const iconArr = [];

  for (let i = 0; i < 4; i += 1) {
    const socialAnchor = document.createElement('a');
    socialAnchor.setAttribute('href', '#');
    socialAnchor.classList.add('social-icon');
    iconArr.push(socialAnchor);
  }

  socialContainer.append(...iconArr);

  const nav = document.createElement('nav');
  const array = ['Home', 'About', 'Menu', 'Contact'];
  const anchorArr = [];

  for (let i = 0; i < 4; i++) {
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('nav-item');
    a.innerText = array[i];
    anchorArr.push(a);
  }

  nav.append(...anchorArr);

  firstContainer.append(socialContainer, nav);

  const secondContainer = document.createElement('div');
  secondContainer.classList.add('second-con');

  const p = document.createElement('p');
  p.innerHTML = '&copy; 2019 Sushi Place';

  const span = document.createElement('span');

  const privacyLink = document.createElement('a');
  privacyLink.setAttribute('href', '#');
  privacyLink.innerText = 'Privacy policy';

  const termLink = document.createElement('a');
  termLink.setAttribute('href', '#');
  termLink.innerHTML = 'Term of Use';

  const divider = document.createElement('span');
  divider.innerHTML = ' | ';

  span.append(privacyLink, divider, termLink);

  secondContainer.append(p, span);

  footer.append(firstContainer, secondContainer);

  const section = document.createElement('section');
  section.classList.add('section');
  section.append(h1, form, footer);

  return section;
};

export default section4;