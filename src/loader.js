import {populateMenu} from './menu.js';

let contentDiv = document.getElementById('content');

let bodyDiv = document.createElement('div');

function createAbout(){

    bodyDiv.replaceChildren();

    let title = document.createElement('h1');
    title.textContent = "ERBS restaurant";

    let about = document.createElement('p');
    about.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa expedita repellendus corporis asperiores eaque tempora. Velit nam maxime illo soluta facere sapiente quam quis, sunt consequatur quae. Expedita, corporis aliquam?';

    bodyDiv.append(wrapInContainer(title));
    bodyDiv.append(wrapInContainer(about));
    contentDiv.append(bodyDiv);
}

function wrapInContainer(element){
    let container = document.createElement('div');
    container.classList.add('container');
    container.append(element);
    return container;
}

function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const home = createButton('HOME', createAbout);
    header.append(home);

    const menu = createButton('MENU', populateMenu);
    header.append(menu);

    const contact = createButton('CONTACT');
    header.append(contact);

    contentDiv.append(header);
}

function createButton(content, action){
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('nav');
    button.textContent = content;
    button.addEventListener('click', action);
    return button;
}

export {createHeader, createAbout, wrapInContainer, bodyDiv};