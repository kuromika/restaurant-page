let contentDiv = document.getElementById('content');

function createAbout(){

    let title = document.createElement('h1');
    title.textContent = "ERBS restaurant";

    let about = document.createElement('p');
    about.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa expedita repellendus corporis asperiores eaque tempora. Velit nam maxime illo soluta facere sapiente quam quis, sunt consequatur quae. Expedita, corporis aliquam?';


    contentDiv.append(wrapInContainer(title));
    contentDiv.append(wrapInContainer(about));
}

function wrapInContainer(element){
    let container = document.createElement('div');
    container.classList.add('container');
    container.append(element);
    return container;
}

function createHeader(){
    let header = document.createElement('header');
    header.classList.add('header');
    header.append(createButton('HOME'));
    header.append(createButton('MENU'));
    header.append(createButton('ABOUT'));
    contentDiv.append(header);
}

function createButton(content){
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('nav');
    button.textContent = content;
    return button;
}

export {createHeader, createAbout, wrapInContainer};