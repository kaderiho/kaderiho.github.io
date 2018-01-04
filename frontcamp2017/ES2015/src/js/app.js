import 'babel-polyfill';
import 'whatwg-fetch';
import 'styles/app.scss';
import Articles from 'js/components/articles-list/articles-list';
import Navigation from 'js/components/navigation-controls/navigation-controls';

const getNewsListAssetsButton = document.querySelector('.getNewsListAssetsButton');

const retrieveChannelsAssets = function() {
    return import(/* webpackChunkName : "channels-list" */
        /* webpackMode: "lazy" */
        './components/channels-list/channels-list');
};

const getChannelsAssetsHandler = function() {
    this.classList.add('btn--hidden');

    retrieveChannelsAssets().then(Channel => {
        new Channel.default({
            initElement: document.querySelector('channels-list')
        });
    });
};

getNewsListAssetsButton.addEventListener('click', getChannelsAssetsHandler);

new Articles({
    initElement: document.querySelector('articles-list'),
    step: 5
});

new Navigation({
    initElement: document.querySelector('navigation-controls')
});



