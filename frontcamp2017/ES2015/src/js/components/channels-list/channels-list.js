import CHANNELS_SERVICE from 'js/services/CHANNELS_SERVICE';
import 'data/channels-list.json';
import './channels-list.scss';

export default class Channels {
    constructor({ targetElement }) {
        this.targetElement = targetElement;
        this.init(targetElement).then(() => {
            this._subscribeOnEvents();
        });
    }

    static getChannels() {
        return CHANNELS_SERVICE.getChannels();
    }

    static parseChannel(channelItem) {
        return `<li class="channelsList-item" data-key="${channelItem.key}">
                    <img src="${channelItem.logoPath}" class="channelLogo" alt=""/>
                    <p class="channelTitle">${channelItem.title}</p>
                 </li>`;
    }

    async init(targetElement) {
        this.channels = (await Channels.getChannels()).channels;
        this.render(targetElement, this.channels);
    }
}

Channels.prototype._subscribeOnEvents = function() {
    document.addEventListener('showChannelsList', () => {
        this.render(this.targetElement, this.channels);
    });
};

Channels.prototype._attachActionHandlers = function() {
    const channelsList = this.channesListElement.querySelectorAll('.channelsList-item');
    let showArticlesEvent = new CustomEvent('showArticlesList', {detail: {}});

    for (let channelItem of channelsList) {
        channelItem.addEventListener('click', () => {
            showArticlesEvent.detail.channelKey = channelItem.getAttribute('data-key');
            document.dispatchEvent(showArticlesEvent);
        });
    }
};

Channels.prototype.render = function(targetElement, channelsList) {
    let channelsListOutput = '';

    this.channesListElement = document.createElement('ul');
    this.channesListElement.className = 'channelsList';

    targetElement.innerHTML = '';
    targetElement.appendChild(this.channesListElement);

    for (let channel of channelsList) {
        channelsListOutput += Channels.parseChannel(channel);
    }

    this.channesListElement.innerHTML = channelsListOutput;
    this._attachActionHandlers();
};
