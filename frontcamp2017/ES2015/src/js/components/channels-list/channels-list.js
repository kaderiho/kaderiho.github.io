import CHANNELS_SERVICE from 'js/services/CHANNELS_SERVICE';
import ARTICLES_SERVICE from 'js/services/ARTICLES_SERVICE';
import 'data/channels-list.json';
import Store from 'js/store';
import './channels-list.scss';

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
        Store.dispatch({ type: 'CHANNELS_LIST_INIT', channels: this.channels });
    }
}

const channelClickHandler = function(channelItem) {
    const channelKey = channelItem.getAttribute('data-key');

    Store.dispatch({ type: 'CHANNELS_LIST_INIT', channels: []});
    Store.dispatch({ type: 'NAVIGATION_VISIBILITY', isNavigationVisible: true});

    ARTICLES_SERVICE.getArticles(channelKey).then((channelObject) => {
        Store.dispatch({ type: 'ARTICLES_LIST_INIT', articles: channelObject.articles });
    });
};

Channels.prototype._storeSubscribe = function() {
    Store.subscribe(() => {
        let channels = Store.getState().channels;
        this.render(this.initElement, channels);
    });
};

Channels.prototype._attachHandlers = function() {
    const channelsList = this.channesListElement.querySelectorAll('.channelsList-item');

    for (let channelItem of channelsList) {
        channelItem.addEventListener('click', () => {
            channelClickHandler(channelItem);
        });
    }
};

Channels.prototype.render = function(initElement, channelsList) {
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
};
