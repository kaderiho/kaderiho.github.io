import CHANNELS_SERVICE from 'js/services/CHANNELS_SERVICE';
import './navigation-controls.scss';
import Store from 'js/appStore';

export default class Navigation {
    constructor({ initElement }) {
        this.initElement = initElement;
        this.render();
        this._storeSubscribe();
    }
}

const backButtonHandler = function() {
    Store.dispatch({ type: 'CHANNELS_LIST_INIT', channels: CHANNELS_SERVICE.getChannels() });
    Store.dispatch({ type: 'NAVIGATION_VISIBILITY', isNavigationVisible: false });
    Store.dispatch({ type: 'ARTICLES_LIST_INIT', articles: [] });
    this.element.classList.add('navigationControls--hidden');
};

const documentScrollHandler = function() {
    window.pageYOffset > 500 ?
        this.scrollUpButton.classList.remove('navigationControls-button--hidden') :
        this.scrollUpButton.classList.add('navigationControls-button--hidden');
};

const scrollUpButtonHandler = function() {
    window.scrollTo(0, 0);
};

Navigation.prototype._storeSubscribe = function() {
    Store.subscribe(() => {
        this.isNavigationVisible = Store.getState().isNavigationVisible;
        this.render();
    });
};

Navigation.prototype._attachHandlers = function() {
    this.scrollUpButton.addEventListener('click', scrollUpButtonHandler);
    document.addEventListener('scroll', documentScrollHandler.bind(this));
    this.backButton.addEventListener('click', backButtonHandler.bind(this));
};

Navigation.prototype.render = function () {
    this.element = document.createElement('div');
    this.element.className = this.isNavigationVisible ? 'navigationControls' : 'navigationControls navigationControls--hidden';
    this.element.innerHTML = `<div class="navigationControls-inner">
                                <button class="navigationControls-button" id="backHomeButton">
                                    <svg width="32" height="32" viewBox="0 0 314.069 314.069">
                                        <path d="M293.004 78.525C249.64 3.435 153.62-22.295 78.53 21.06 3.437 64.41-22.295 160.444 21.07 235.543c43.35 75.087 139.375 100.822 214.465 57.467 75.096-43.362 100.832-139.39 57.47-214.485zm-73.168 187.277c-60.075 34.685-136.894 14.114-171.576-45.97-34.69-60.07-14.105-136.896 45.972-171.58 60.07-34.682 136.894-14.098 171.578 45.98 34.685 60.076 14.098 136.886-45.974 171.57zm-7.85-124.474h-65.49l17.598-17.603c6.124-6.13 6.124-16.076 0-22.197-6.13-6.133-16.078-6.133-22.207 0l-44.402 44.4c-6.13 6.13-6.13 16.078 0 22.213l44.402 44.404c6.13 6.128 16.078 6.128 22.207 0 6.124-6.13 6.124-16.077 0-22.2l-17.606-17.602h65.5c8.668 0 15.696-7.04 15.696-15.7v-.008c0-8.68-7.03-15.704-15.698-15.704z"/>
                                    </svg>
                                    Back
                                </button>
                                <button class="navigationControls-button navigationControls-button--hidden" id="scrollUpButton">
                                    Scroll up
                                    <svg width="32" height="32" viewBox="0 0 314.069 314.069">
                                        <path d="M168.133 97.482c-6.126-6.127-16.072-6.127-22.197 0h-.008c-.016.016-.024.032-.032.04l-44.37 44.364c-6.132 6.13-6.132 16.08 0 22.208v-.01c6.13 6.133 16.07 6.133 22.202 0l17.607-17.597v65.503c0 8.664 7.033 15.7 15.7 15.7 8.67 0 15.697-7.036 15.697-15.7v-65.503l17.602 17.598c6.135 6.132 16.077 6.132 22.2 0v.01c6.136-6.13 6.136-16.08 0-22.21l-44.4-44.403zm124.87-18.957C249.65 3.435 153.62-22.295 78.533 21.06 3.436 64.41-22.296 160.444 21.07 235.543c43.35 75.087 139.375 100.822 214.465 57.467 75.096-43.362 100.832-139.39 57.47-214.485zm-73.167 187.277c-60.075 34.685-136.894 14.114-171.576-45.97-34.69-60.07-14.097-136.896 45.972-171.58 60.07-34.682 136.894-14.098 171.578 45.98 34.685 60.076 14.098 136.886-45.974 171.57z"/>
                                    </svg>
                                </button>
                            </div>`;

    this.initElement.innerHTML = '';
    this.initElement.appendChild(this.element);

    this.scrollUpButton = this.element.querySelector('#scrollUpButton');
    this.backButton = this.element.querySelector('#backHomeButton');

    this._attachHandlers();
};
