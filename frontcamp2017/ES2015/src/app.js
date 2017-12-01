import 'babel-polyfill';
import 'whatwg-fetch';
import ARTICLES_SERVICE from './services/ARTICLES_SERVICE.js';
import CHANNELS_SERVICE from './services/CHANNELS_SERVICE.js';
import Articles from './components/articles-list/articles-list.js';
import Channels from './components/channels-list/channels-list.js';

(function () {

    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

const navigationControlsElement = document.querySelector('.navigationControls');
const backHomeButton = document.querySelector('#backHomeButton');
const scrollUpButton = document.querySelector('#scrollUpButton');
const mainElement = document.querySelector('main');

// Basic config for Articles and Channels components
const channelsConfig = {
    targetElement: mainElement
};

const articlesConfig = {
    targetElement: mainElement,
    afterInserted() {
        navigationControlsElement.classList.remove('navigationControls--hidden');
        backHomeButton.classList.remove('navigationControls-button--hidden');
    },
    step: 5
};

// Initialize Articles and Channels list components
new Channels(channelsConfig);
new Articles(articlesConfig);

backHomeButton.addEventListener('click', () => {
    document.dispatchEvent(new CustomEvent('showChannelsList'));
    navigationControlsElement.classList.add('navigationControls--hidden');
});

scrollUpButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
document.addEventListener('scroll', () => {
    window.pageYOffset > 500 ?
        scrollUpButton.classList.remove('navigationControls-button--hidden') :
        scrollUpButton.classList.add('navigationControls-button--hidden');
});
