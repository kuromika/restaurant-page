import { bodyDiv, wrapInContainer } from "./loader";

import eggs from './035. Scrambled Egg_스크램블 에그.png';
import chicken from './040. Fried Chicken_후라이드 치킨.png';
import steak from './044. Steak_스테이크.png';
import british from './053. Fish And Chips_피쉬 앤 칩스.png';
import combo from './054. #11 Combo Meal_일레븐 세트.png';

let menu = [eggs, chicken, steak, british, combo];
let descriptions = ['A common\n\n egg variety, competing with sunny-side-up. When you have no butter or milk, why not scramble an egg?',
                    "If it can fly and has wings and a beak, it's definitely a chicken. It could actually be a crow, pigeon, or whatever, but once you fry it, it will still be Fried Chicken.",
                    "A tasty piece of meat from a unkown animal",
                    "The favorite meal of many british people",
                    "Everyone's favorite combo meal prepared by Eleven herself."];

function createMenuItem(item, index){
    const menuItem = document.createElement('div');
    const description = document.createElement('h4');
    description.textContent = descriptions[index];
    const food = new Image();
    food.src = item;
    menuItem.append(description);
    menuItem.append(food);
    menuItem.classList.add('item');
    bodyDiv.append(wrapInContainer(menuItem));
}

function populateMenu(){
    bodyDiv.replaceChildren();
    for (let i = 0; i < menu.length; i++){
        createMenuItem(menu[i], i);
    }
}

export {populateMenu};