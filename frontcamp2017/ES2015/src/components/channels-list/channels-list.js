class Channels {
    constructor({ targetElement }) {
        this.targetElement = targetElement;
        this.init(targetElement);
        this._subscribeOnEvents();
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

    _subscribeOnEvents() {
        document.addEventListener('showChannelsList', () => {
            this.render(this.targetElement, this.channels);
        });
    }

    _attachActionHandlers() {
        const channelsList = this.channesListElement.querySelectorAll('.channelsList-item');
        let showArticlesEvent = new CustomEvent('showArticlesList', { detail: {} });

        for (let channelItem of channelsList) {
            channelItem.addEventListener('click', () => {
                showArticlesEvent.detail.channelKey = channelItem.getAttribute('data-key');
                document.dispatchEvent(showArticlesEvent);
            });
        }
    }

    render(targetElement, channelsList) {
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
    }
    init(targetElement) {
        Channels.getChannels()
            .then((parsedResponse) => {
                this.channels = parsedResponse.channels;
                this.render(targetElement, this.channels);
            });
    }
}
