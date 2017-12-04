'use strict';

var navigationControlsElement = document.querySelector('.navigationControls');
var backHomeButton = document.querySelector('#backHomeButton');
var scrollUpButton = document.querySelector('#scrollUpButton');
var mainElement = document.querySelector('main');

// Basic config for Articles and Channels components
var channelsConfig = {
    targetElement: mainElement
};

var articlesConfig = {
    targetElement: mainElement,
    afterInserted: function afterInserted() {
        navigationControlsElement.classList.remove('navigationControls--hidden');
        backHomeButton.classList.remove('navigationControls-button--hidden');
    },

    step: 5
};

// Initialize Articles and Channels list components
new Channels(channelsConfig);
new Articles(articlesConfig);

backHomeButton.addEventListener('click', function () {
    document.dispatchEvent(new CustomEvent('showChannelsList'));
    navigationControlsElement.classList.add('navigationControls--hidden');
});

scrollUpButton.addEventListener('click', function () {
    window.scrollTo(0, 0);
});
document.addEventListener('scroll', function () {
    window.pageYOffset > 500 ? scrollUpButton.classList.remove('navigationControls-button--hidden') : scrollUpButton.classList.add('navigationControls-button--hidden');
});
