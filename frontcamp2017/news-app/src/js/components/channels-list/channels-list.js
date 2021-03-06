import CHANNELS_SERVICE from 'js/services/CHANNELS_SERVICE';
import ARTICLES_SERVICE from 'js/services/ARTICLES_SERVICE';
import actionTypes from 'js/constants/action-types';
import 'data/channels-list.json';
import Store from 'js/appStore';
import './channels-list.scss';

const channelClickHandler = function() {
    const channelKey = this.getAttribute('data-key');

    Store.dispatch({ type: actionTypes.CHANNELS_LIST_INIT, channels: []});
    Store.dispatch({ type: actionTypes.NAVIGATION_VISIBILITY, isNavigationVisible: true});

    ARTICLES_SERVICE.getArticles(channelKey).then((channelObject) => {
        Store.dispatch({ type: actionTypes.ARTICLES_LIST_INIT, articles: channelObject.articles });
    });
};

export default class Channels {
    constructor({ initElement }) {
        this.initElement = initElement;
        this._storeSubscribe();
        this.init();
    }

    static getChannels() {
        return CHANNELS_SERVICE.getChannels();
    }

    static getChannelHTML(channelItem) {
        return `<li class="channelsList-item" data-key="${channelItem.key}">
                    <img src="${channelItem.logoPath}" class="channelLogo" alt=""/>
                    <p class="channelTitle">${channelItem.title}</p>
                 </li>`;
    }

    async init() {
        this.channels = (await Channels.getChannels());
        Store.dispatch({ type: actionTypes.CHANNELS_LIST_INIT, channels: this.channels });
    }

    _storeSubscribe() {
        Store.subscribe(() => {
            let channels = Store.getState().channels;
            this.render(this.initElement, channels);
        });
    }

    _attachHandlers() {
        const channelsList = this.channesListElement.querySelectorAll('.channelsList-item');

        for (let channelItem of channelsList) {
            channelItem.addEventListener('click', channelClickHandler);
        }
    }

    render(initElement, channelsList) {
        let channelsListOutput = '';

        this.channesListElement = document.createElement('ul');
        this.channesListElement.className = 'channelsList';

        initElement.innerHTML = '';
        initElement.appendChild(this.channesListElement);

        for (let channel of channelsList) {
            channelsListOutput += Channels.getChannelHTML(channel);
        }

        this.channesListElement.innerHTML = channelsListOutput;
        this._attachHandlers();
    }
}
