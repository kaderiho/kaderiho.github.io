import 'babel-polyfill';
import 'whatwg-fetch';
import 'styles/app.scss';
import 'js/components/subscribe/subscribe.scss';
import Articles from 'js/components/articles-list/articles-list';
import EVENT_MANAGER from 'js/lib/publish-subscribe';
import Subscribe, { DailySubscribe, WeeklySubscribe, MonthlySubscribe } from 'js/components/subscribe/subscribe';
import Navigation from 'js/components/navigation-controls/navigation-controls';
const getChannelsAssetsButton = document.querySelector('.getNewsListAssetsButton');

const lazyImportChannelsAssets = function() {
    return import(/* webpackChunkName : "channels-list" */
        /* webpackMode: "lazy" */
        './components/channels-list/channels-list');
};

const getChannelsAssetsHandler = function() {
    this.classList.add('btn--hidden');

    lazyImportChannelsAssets().then(Channel => new Channel.default({
        initElement: document.querySelector('channels-list')
    }));
};

getChannelsAssetsButton.addEventListener('click', getChannelsAssetsHandler);

document.addEventListener('scroll', () => EVENT_MANAGER.publish({ type: 'documentScroll' }));

new Articles({
    initElement: document.querySelector('articles-list'),
    step: 5
});

new Navigation({
    initElement: document.querySelector('navigation-controls')
});

new Subscribe({
    strategy: new WeeklySubscribe(),
    initElement: document.querySelector('subscribe')
});
