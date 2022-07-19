import { createFrontPage } from "./front-page";
import { createMenuPage } from "./menu-page";
import { createAboutPage } from "./about-page";

const tabMaker = function (tabs=['Home','Menu','About']) {
    const content = document.getElementById('content');
    const tabHolder = document.createElement('div');
    const pageFunctions = [createFrontPage, createMenuPage, createAboutPage]
    let tabsObj = {};
    for (let i = 0; i < tabs.length; i += 1) {
        const tab = tabs[i] + 'Btn';
        tabsObj[tab] = document.createElement('button');
        tabsObj[tab].textContent = tabs[i];
        tabsObj[tab].addEventListener('click', () => {
            addToContent(pageFunctions[i]());
        })
        tabHolder.appendChild(tabsObj[tab]);
    };
    content.appendChild(tabHolder);
};

const addToContent = function (elements) {
    const content = document.getElementById('content');
    for (let i = 0; i < elements.length; i += 1) {
        content.appendChild(elements[i]);
    };
};


tabMaker();
addToContent(createFrontPage());