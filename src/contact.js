import { wrapInContainer, bodyDiv} from "./loader";

function createContactInfo(){
    bodyDiv.replaceChildren();
    let title = document.createElement('h1');
    title.textContent = "Contact Us";
    bodyDiv.append(wrapInContainer(title));

    let home = document.createElement('p');
    home.textContent = '9F, 246, Hwangsaeul-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea';
    bodyDiv.append(wrapInContainer(home));

    let email = document.createElement('p');
    email.textContent = 'friendship@nimbleneuron.com';
    bodyDiv.append(wrapInContainer(email));

}

export {createContactInfo};