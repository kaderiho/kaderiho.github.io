import 'babel-polyfill';
import 'whatwg-fetch';
// import 'styles/app.scss';
// import 'styles/navigation-controls.scss';
// import Articles from 'js/components/articles-list/articles-list';
// import EVENT_MANAGER from 'js/services/EVENT_MANAGER';
import './lib/redux';


// const getNewsListAssetsButton = document.querySelector('.getNewsListAssetsButton');
// const navigationControlsElement = document.querySelector('.navigationControls');
// const backHomeButton = document.querySelector('#backHomeButton');
// const scrollUpButton = document.querySelector('#scrollUpButton');
// const mainElement = document.querySelector('main');
//
// // Lazy loading static for NEWS LIST component
// getNewsListAssetsButton.addEventListener('click', () => {
//     import(/* webpackChunkName : "channels-list" */
//            /* webpackMode: "lazy" */
//            './components/channels-list/channels-list').then(channels => {
//         new channels.default(channelsConfig);
//     });
// });
//
// // Basic config for Articles and Channels components
// const channelsConfig = {
//     targetElement: mainElement
// };
//
// const articlesConfig = {
//     targetElement: mainElement,
//     afterInserted() {
//         navigationControlsElement.classList.remove('navigationControls--hidden');
//         backHomeButton.classList.remove('navigationControls-button--hidden');
//     },
//     step: 5
// };
//
// // Initialize Articles and Channels list components
// new Articles(articlesConfig);
//
// backHomeButton.addEventListener('click', () => {
//     EVENT_MANAGER.publish('showChannelsList');
//     navigationControlsElement.classList.add('navigationControls--hidden');
// });
//
// scrollUpButton.addEventListener('click', () => {
//     window.scrollTo(0, 0);
// });
// document.addEventListener('scroll', () => {
//     window.pageYOffset > 500 ?
//         scrollUpButton.classList.remove('navigationControls-button--hidden') :
//         scrollUpButton.classList.add('navigationControls-button--hidden');
// });
//
//
